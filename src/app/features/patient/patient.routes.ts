import { Routes } from "@angular/router";
import { PatientFicheComponent } from "./patient-fiche/patient-fiche.component";
import { PatientFormComponent } from "./patient-form/patient-form.component";

export const PATIENT_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./patient.component').then(m => m.PatientComponent)
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