import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found.component';
import { ComposeMessageComponent } from './components/compose-message.component';

const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: '/characters', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    },
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }