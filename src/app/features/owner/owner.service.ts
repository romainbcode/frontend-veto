import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, tap, of, mergeMap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class OwnerService {
    owners = signal<any[]>([]);

    constructor(private httpClient: HttpClient) {
        this.reloadOwners().subscribe();
    }

    getOwners(): Observable<any[]> {
        //return this.httpClient.request<any[]>('GET', '/owner');
        return of([{ id: 1, nom: 'Isnard', prenom: 'Achil', numero: '0761989794', mail: 'achil.isnard@ph.com' }, { id: 2,  nom: 'Isnard', prenom: 'Zoé', numero: '0799999794', mail: 'zoe.isnard@ph.com' }]);
    }

    reloadOwners(): Observable<any[]> {
        return this.getOwners().pipe(
            tap(patients => this.owners.set(patients))
        )
    }

    findOwnerById(id: number) : Observable<any> {
        //return this.httpClient.request<any>('GET', '/owner/' + id);
        return of({ id: 1, nom: 'Isnard', prenom: 'Achil', numero: '0761989794', mail: 'achil.isnard@ph.com' });
    }

    deleteOwnerById(id: number): Observable<any[]> {
        return this.httpClient.request<any[]>('DELETE', '/owner/' + id)
            .pipe(
                mergeMap(() => this.reloadOwners())
            )
    }

    editOwnerById(id: number, newOwner: any): Observable<any[]> {
        return this.httpClient.request<any[]>('PATCH', '/owner/' + id, { body: newOwner })
            .pipe(
                mergeMap(() => this.reloadOwners())
            )
    }

    createOwner(owner: any): Observable<any[]> {
        const createOwnerDto = {

        }

        return this.httpClient.request('POST', '/owner', { body: createOwnerDto })
            .pipe(
                mergeMap(() => this.reloadOwners())
            )
    }
}