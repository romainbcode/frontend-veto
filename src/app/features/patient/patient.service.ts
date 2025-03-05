import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, tap, pipe, of, mergeMap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PatientService {
    patients = signal<any[]>([]);

    constructor(private httpClient: HttpClient) {
        this.reloadPatients().subscribe();
    }

    getPatients(): Observable<any[]> {
        //return this.httpClient.request<any[]>('GET', '/patient');
        return of([{ id: 1, statut: 'Terminé', nom: 'Achil', age: 24, type: 'Chien' }, { id: 2, statut: 'En cours', nom: 'Alexy', age: 24, type: 'Chat' },
            { id: 3, statut: 'En cours', nom: 'Quentin', age: 6, type: 'NAC' }
        ]);
    }

    reloadPatients(): Observable<any[]> {
        return this.getPatients().pipe(
            tap(patients => this.patients.set(patients))
        )
    }

    findPatientById(id: number) : Observable<any> {
        //return this.httpClient.request<any>('GET', '/patient/' + id);
        return of({ id: 1, statut: 'Terminé', nom: 'Achil', age: 24, type: 'Chien' });
    }

    deletePatientById(id: number): Observable<any[]> {
        return this.httpClient.request<any[]>('DELETE', '/patient/' + id)
            .pipe(
                mergeMap(() => this.reloadPatients())
            )
    }

    editPatientById(id: number, newPatient: any): Observable<any[]> {
        return this.httpClient.request<any[]>('PATCH', '/patient/' + id, { body: newPatient })
            .pipe(
                mergeMap(() => this.reloadPatients())
            )
    }

    createPatient(patient: any): Observable<any[]> {
        const createPatientDto = {

        }

        return this.httpClient.request('POST', '/patient', { body: createPatientDto })
            .pipe(
                mergeMap(() => this.reloadPatients())
            )
    }
}