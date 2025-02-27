import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, tap, pipe } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PatientService {
    patients = signal<any[]>([]);

    constructor(private httpClient: HttpClient) {}

    protected getPatients(): Observable<any[]> {
        return this.httpClient.request<any[]>('GET', 'url');
    }

    protected reloadPatients(): Observable<any[]> {
        return this.getPatients().pipe(
            tap(patients => this.patients.set(patients))
        )
    }
}