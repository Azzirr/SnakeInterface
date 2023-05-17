import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
    {path: '', component: LoginFormComponent},
    // {path: '**', component: 404},
    {path: 'game', component: PlayComponent},
    // {path: 'game/color/:version', component: PlayComponent}
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