import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SurgeryComponent } from './features/surgery/surgery.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
        //loadComponent: () => import ('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'consultation',
        loadChildren: () => import('./features/consultation/consultation.routes').then(m => m.CONSULTATION_ROUTES)
    },
    {
        path: 'animal',
        loadChildren: () => import('./features/animal/animal.routes').then(m => m.ANIMAL_ROUTES)
    },
    {
        path: 'owner',
        loadChildren: () => import('./features/owner/owner.routes').then(m => m.OWNER_ROUTES)
    },
    {
        path: 'surgery',
        component: SurgeryComponent,
    },
    {
        path: 'document',
        loadChildren: () => import('./features/document/document.routes').then(m => m.DOCUMENT_ROUTES)
    }
];
