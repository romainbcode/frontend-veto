import { Routes } from "@angular/router";
import { ConsultationFormComponent } from "../consultation/patient-form/consultation-form.component";

export const DOCUMENT_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./document.component').then(m => m.DocumentComponent)
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
        component: ConsultationFormComponent
    },

]