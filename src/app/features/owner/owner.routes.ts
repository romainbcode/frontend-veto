import { Routes } from "@angular/router";
import { ConsultationFormComponent } from "../consultation/patient-form/consultation-form.component";
import { OwnerFormComponent } from "./owner-form/owner-form.component";

export const OWNER_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./owner.component').then(m => m.OwnerComponent)
    },    
    {
        path: 'create',
        component: ConsultationFormComponent
    },
    {
        path: 'edit/:id',
        component: OwnerFormComponent
    },
    {
        path: ':id',
        component: ConsultationFormComponent
    },

]