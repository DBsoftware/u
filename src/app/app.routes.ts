import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
    { path: 'list', component: CatalogueComponent },
    { path: 'form/:kind', component: FormComponent },
    { path: '**', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
