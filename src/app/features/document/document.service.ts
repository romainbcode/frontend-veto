import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, tap, of, mergeMap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DocumentService {
    documents = signal<any[]>([]);

    constructor(private httpClient: HttpClient) {
        this.reloadDocuments().subscribe();
    }

    getDocuments(): Observable<any[]> {
        //return this.httpClient.request<any[]>('GET', '/document');
        return of([{ id: 1, titre: 'Consignes sorties extraction chien', type: 'Consignes Post-Opératoire' }, { id: 2, titre: 'Consignes sorties extraction chat', type: 'Consignes Post-Opératoire' }]);
    }

    reloadDocuments(): Observable<any[]> {
        return this.getDocuments().pipe(
            tap(documents => this.documents.set(documents))
        )
    }

    findDocumentById(id: number) : Observable<any> {
        //return this.httpClient.request<any>('GET', '/document/' + id);
        return of({ id: 1, titre: 'Consignes sorties extraction chien', type: 'Consignes Post-Opératoire' });
    }

    deleteDocumentById(id: number): Observable<any[]> {
        return this.httpClient.request<any[]>('DELETE', '/document/' + id)
            .pipe(
                mergeMap(() => this.reloadDocuments())
            )
    }

    editDocumentById(id: number, newDocument: any): Observable<any[]> {
        return this.httpClient.request<any[]>('PATCH', '/document/' + id, { body: newDocument })
            .pipe(
                mergeMap(() => this.reloadDocuments())
            )
    }

    createDocument(document: any): Observable<any[]> {
        const createDocumentDto = {

        }

        return this.httpClient.request('POST', '/document', { body: createDocumentDto })
            .pipe(
                mergeMap(() => this.reloadDocuments())
            )
    }
}