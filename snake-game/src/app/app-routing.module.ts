import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
    {path: '', component: LoginFormComponent},
    {path: 'game', component: PlayComponent}
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