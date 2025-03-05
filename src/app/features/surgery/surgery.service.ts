import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, tap, of, mergeMap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SurgeryService {
    surgeries = signal<any[]>([]);

    constructor(private httpClient: HttpClient) {
        this.reloadSurgeries().subscribe();
    }

    getSurgeries(): Observable<any[]> {
        //return this.httpClient.request<any[]>('GET', '/surgery');
        return of([{ id: 1, titre: 'Extraction dentaire', date: '03/03/2025', type: "Chirurgeries dentaires" }, { id: 2, titre: 'Détartrage et polissage', date: '03/03/2025', type: "Autres interventions" }]);
    }

    reloadSurgeries(): Observable<any[]> {
        return this.getSurgeries().pipe(
            tap(surgeries => this.surgeries.set(surgeries))
        )
    }

    findSurgeryById(id: number) : Observable<any> {
        //return this.httpClient.request<any>('GET', '/surgery/' + id);
        return of({ id: 1, titre: 'Extraction dentaire', date: '03/03/2025', type: "Chirurgeries dentaires" });
    }

    deleteSurgeryById(id: number): Observable<any[]> {
        return this.httpClient.request<any[]>('DELETE', '/surgery/' + id)
            .pipe(
                mergeMap(() => this.reloadSurgeries())
            )
    }

    editSurgeryById(id: number, newSurgery: any): Observable<any[]> {
        return this.httpClient.request<any[]>('PATCH', '/surgery/' + id, { body: newSurgery })
            .pipe(
                mergeMap(() => this.reloadSurgeries())
            )
    }

    createSurgery(surgery: any): Observable<any[]> {
        const createSurgeryDto = {

        }

        return this.httpClient.request('POST', '/surgery', { body: createSurgeryDto })
            .pipe(
                mergeMap(() => this.reloadSurgeries())
            )
    }
}