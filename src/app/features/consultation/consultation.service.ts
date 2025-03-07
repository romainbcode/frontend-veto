import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap, pipe, of, mergeMap, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  consultations = signal<any[]>([]);
  originalConsultations = signal<any[]>([]);

  constructor(private httpClient: HttpClient) {
    this.reloadConsultations().subscribe();
  }

  getConsultations(): Observable<any[]> {
    //return this.httpClient.request<any[]>('GET', '/patient');
    return of([
      {
        id: 1,
        statut: { id: 1, label: 'Terminé' },
        nom: 'Achil',
        age: 24,
        type: { id: 1, label: 'Chien' },
      },
      {
        id: 2,
        statut: { id: 2, label: 'En attente' },
        nom: 'Alexy',
        age: 24,
        type: { id: 2, label: 'Chat' },
      },
      {
        id: 3,
        statut: { id: 3, label: 'Annulé' },
        nom: 'Quentin',
        age: 6,
        type: { id: 3, label: 'NAC' },
      },
    ]);
  }

  reloadConsultations(): Observable<any[]> {
    return this.getConsultations().pipe(
      tap((consultations) => {
        this.consultations.set(consultations);
        this.originalConsultations.set(consultations); // Sauvegarde
      })
    );
  }

  findConsultationById(id: number): Observable<any> {
    //return this.httpClient.request<any>('GET', '/patient/' + id);
    return of({
      id: 1,
      statut: { id: 1, label: 'Terminé' },
      nom: 'Achil',
      age: 24,
      type: { id: 1, label: 'Chien' },
    });
  }

  findConsultationWithFilter(filterValue: string): any[] {
    if (!filterValue) {
      this.consultations.set(this.originalConsultations());
      return this.consultations();
    }

    const filteredConsultations = this.originalConsultations().filter((consultation) => 
      consultation.nom.toLowerCase().includes(filterValue.toLowerCase()) ||
      consultation.age.toString().includes(filterValue) ||
      consultation.statut.label.toLowerCase().includes(filterValue.toLowerCase()) ||
      consultation.type.label.toLowerCase().includes(filterValue.toLowerCase())
    );
  
    this.consultations.set(filteredConsultations);
    return this.consultations();
  }

  deleteConsultationById(id: number): Observable<any[]> {
    return this.httpClient
      .request<any[]>('DELETE', '/consultation/' + id)
      .pipe(mergeMap(() => this.reloadConsultations()));
  }

  editConsultationById(id: number, newConsultation: any): Observable<any[]> {
    return this.httpClient
      .request<any[]>('PATCH', '/consultation/' + id, { body: newConsultation })
      .pipe(mergeMap(() => this.reloadConsultations()));
  }

  createConsultation(consultation: any): Observable<any[]> {
    const createConsultationDto = {};

    return this.httpClient
      .request('POST', '/consultation', { body: createConsultationDto })
      .pipe(mergeMap(() => this.reloadConsultations()));
  }

  completeConsultationById(id: number): Observable<any[]> {
    return this.httpClient
    .request<any[]>('PUT', '/consultation/' + id)
    .pipe(mergeMap(() => this.reloadConsultations()))
  }
}
