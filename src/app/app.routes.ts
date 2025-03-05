import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PatientComponent } from './features/patient/patient.component';
import { OwnerComponent } from './features/owner/owner.component';
import { SurgeryComponent } from './features/surgery/surgery.component';
import { DocumentComponent } from './features/document/document.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
        //loadComponent: () => import ('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'patient',
        loadChildren: () => import('./features/patient/patient.routes').then(m => m.PATIENT_ROUTES)
    },
    {
        path: 'owner',
        loadChildren: () => import('./features/owner/owner.routes').then(m => m.OWNER_ROUTES)
    },
    {
        path: 'surgery',
        component: SurgeryComponent,
    },
    {
        path: 'document',
        loadChildren: () => import('./features/document/document.routes').then(m => m.DOCUMENT_ROUTES)
    }
];
