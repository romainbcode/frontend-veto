import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, tap, of, mergeMap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class VeterinarianService {
    vets = signal<any[]>([]);
    originalVets = signal<any[]>([]);

    constructor(private httpClient: HttpClient) {
        this.reloadVets().subscribe();
    }

    getVets(): Observable<any[]> {
        //return this.httpClient.request<any[]>('GET', '/owner');
        return of([{ id: 1, nom: 'Isnard', prenom: 'Zoe' }, { id: 2,  nom: 'Isnard', prenom: 'Achil'}]);
    }

    reloadVets(): Observable<any[]> {
        return this.getVets().pipe(
            tap(vets => {
                this.vets.set(vets);
                this.originalVets.set(vets);
            })
        )
    }

    findVetById(id: number) : Observable<any> {
        //return this.httpClient.request<any>('GET', '/owner/' + id);
        return of({ id: 1, nom: 'Isnard', prenom: 'Zoé' });
    }

    deleteVetById(id: number): Observable<any[]> {
        return this.httpClient.request<any[]>('DELETE', '/Veterinaire/' + id)
            .pipe(
                mergeMap(() => this.reloadVets())
            )
    }

    editVetById(id: number, newOwner: any): Observable<any[]> {
        return this.httpClient.request<any[]>('PATCH', '/Veterinaire/' + id, { body: newOwner })
            .pipe(
                mergeMap(() => this.reloadVets())
            )
    }

    createVet(vet: any): Observable<any[]> {
        const createVetDto = {

        }

        return this.httpClient.request('POST', '/Veterinaire', { body: createVetDto })
            .pipe(
                mergeMap(() => this.reloadVets())
            )
    }

    findVetWithFilter(filterValue: string): any[] {
        if (!filterValue) {
          this.vets.set(this.originalVets());
          return this.vets();
        }
    
        const filteredVets = this.originalVets().filter((vet) => 
            vet.nom.toLowerCase().includes(filterValue.toLowerCase()) ||
            vet.prenom.toLowerCase().includes(filterValue.toLowerCase())
        );
      
        this.vets.set(filteredVets);
        return this.vets();
      }
}