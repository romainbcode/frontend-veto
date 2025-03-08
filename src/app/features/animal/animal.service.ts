import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap, pipe, of, mergeMap, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  animaux = signal<any[]>([]);
  originalAnimaux = signal<any[]>([]);

  constructor(private httpClient: HttpClient) {
    this.reloadAnimaux().subscribe();
  }

  getAnimaux(): Observable<any[]> {
    //return this.httpClient.request<any[]>('GET', '/patient');
    return of([
      {
        id: 1,
        nom: 'Achil',
        dateNaissance: '07/03/2024',
        type: { id: 1, label: 'Chien' },
        proprietaire: {id: 1, nom: 'ProprioRomain'}
      },
      {
        id: 2,
        nom: 'Quentin',
        dateNaissance: '04/03/2024',
        type: { id: 1, label: 'NAC' },
        proprietaire: {id: 1, nom: 'ProprioRomain2'}
      },{
        id: 3,
        nom: 'Nasser',
        dateNaissance: '07/01/2024',
        type: { id: 1, label: 'Chat' },
        proprietaire: {id: 1, nom: 'ProprioRomain3'}
      },
    ]);
  }

  reloadAnimaux(): Observable<any[]> {
    return this.getAnimaux().pipe(
      tap((animaux) => {
        this.animaux.set(animaux);
        this.originalAnimaux.set(animaux);
      })
    );
  }

  findAnimalById(id: number): Observable<any> {
    //return this.httpClient.request<any>('GET', '/patient/' + id);
    return of({
        id: 1,
        nom: 'Achil',
        dateNaissance: '07/03/2024',
        type: { id: 1, label: 'Chien' },
        proprietaire: {id: 1, nom: 'ProprioRomain'}
      },);
  }

  findAnimalWithFilter(filterValue: string): any[] {
    if (!filterValue) {
      this.animaux.set(this.originalAnimaux());
      return this.animaux();
    }

    /*const filteredAnimaux = this.originalAnimaux().filter((animal) => 
      consultation.nom.toLowerCase().includes(filterValue.toLowerCase())
    );*/
  
    //this.animaux.set(filteredAnimaux);
    return this.animaux();
  }

  deleteAnimalById(id: number): Observable<any[]> {
    return this.httpClient
      .request<any[]>('DELETE', '/animal/' + id)
      .pipe(mergeMap(() => this.reloadAnimaux()));
  }

  editAnimalById(id: number, newAnimal: any): Observable<any[]> {
    return this.httpClient
      .request<any[]>('PATCH', '/animal/' + id, { body: newAnimal })
      .pipe(mergeMap(() => this.reloadAnimaux()));
  }

  createAnimal(animal: any): Observable<any[]> {
    const createAnimalDto = {};

    return this.httpClient
      .request('POST', '/animal', { body: createAnimalDto })
      .pipe(mergeMap(() => this.reloadAnimaux()));
  }

  completeAnimalById(id: number): Observable<any[]> {
    return this.httpClient
    .request<any[]>('PUT', '/animal/' + id)
    .pipe(mergeMap(() => this.reloadAnimaux()))
  }
}
