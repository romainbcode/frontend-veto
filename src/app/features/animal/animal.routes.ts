import { Routes } from "@angular/router";
import { ConsultationFormComponent } from "../consultation/patient-form/consultation-form.component";
import { ConsultationFicheComponent } from "../consultation/patient-fiche/consultation-fiche.component";

export const ANIMAL_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./animal.component').then(m => m.AnimalComponent)
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