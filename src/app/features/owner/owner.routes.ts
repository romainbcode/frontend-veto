import { Routes } from "@angular/router";
import { PatientFicheComponent } from "../patient/patient-fiche/patient-fiche.component";
import { PatientFormComponent } from "../patient/patient-form/patient-form.component";
import { OwnerFormComponent } from "./owner-form/owner-form.component";

export const OWNER_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./owner.component').then(m => m.OwnerComponent)
    },    
    {
        path: 'create',
        component: PatientFormComponent
    },
    {
        path: 'edit/:id',
        component: OwnerFormComponent
    },
    {
        path: ':id',
        component: PatientFicheComponent
    },

]