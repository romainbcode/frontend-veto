import { Routes } from "@angular/router";
import { PatientFicheComponent } from "../patient/patient-fiche/patient-fiche.component";
import { PatientFormComponent } from "../patient/patient-form/patient-form.component";

export const DOCUMENT_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./document.component').then(m => m.DocumentComponent)
    },    
    {
        path: 'create',
        component: PatientFormComponent
    },
    {
        path: 'edit/:id',
        component: PatientFormComponent
    },
    {
        path: ':id',
        component: PatientFicheComponent
    },

]