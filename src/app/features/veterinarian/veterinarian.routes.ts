import { Routes } from "@angular/router";
import { ConsultationFormComponent } from "../consultation/patient-form/consultation-form.component";
import { OwnerFormComponent } from "../owner/owner-form/owner-form.component";

export const VETERINARIAN_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./veterinarian.component').then(m => m.VeterinarianComponent)
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