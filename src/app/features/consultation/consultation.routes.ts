import { Routes } from "@angular/router";
import { ConsultationFicheComponent } from "./patient-fiche/consultation-fiche.component";
import { ConsultationFormComponent } from "./patient-form/consultation-form.component"; 

export const CONSULTATION_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./consultation.component').then(m => m.ConsultationComponent)
    },    
    {
        path: 'create',
        component: ConsultationFormComponent
    },
    {
        path: 'edit/:id',
        component: ConsultationFormComponent
    },
    {
        path: ':id',
        component: ConsultationFicheComponent
    },

]