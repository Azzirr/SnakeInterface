import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import { PlayComponent } from './play/play.component';
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    {path: '', component: LoginFormComponent},
    {path: 'game', component: PlayComponent},
    {path: 'game/:black-and-white', component: PlayComponent},
    {path: '**', component: NotFoundComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}