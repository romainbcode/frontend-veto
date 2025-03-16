import { Routes } from "@angular/router";
import { ConsultationFormComponent } from "../consultation/consultation-form/consultation-form.component";
import { OwnerFormComponent } from "../owner/owner-form/owner-form.component";

export const OFFICE_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./office.component').then(m => m.OfficeComponent)
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