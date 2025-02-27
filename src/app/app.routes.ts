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
        component: PatientComponent
    },
    {
        path: 'owner',
        component: OwnerComponent
    },
    {
        path: 'surgery',
        component: SurgeryComponent,
    },
    {
        path: 'document',
        component: DocumentComponent
    }
];
