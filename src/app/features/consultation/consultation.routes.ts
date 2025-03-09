import { Routes } from "@angular/router";
import { ConsultationFicheComponent } from "./consultation-fiche/consultation-fiche.component";
import { ConsultationFormComponent } from "./consultation-form/consultation-form.component"; 

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