import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
 
const routes: Routes = [
{path: 'register', component: RegistrationComponent},
{path:'login',component:LoginComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    
export class AccountRoutingModule { }