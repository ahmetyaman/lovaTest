import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChemistComponent } from './pages/chemist/chemist.component';
import { CoronaComponent } from './pages/corona/corona.component';
import { LoginComponent } from './pages/login/login.component';
import { SpecialFormComponent } from './pages/special-form/special-form.component';
import { UserOperationComponent } from './pages/user-operation/user-operation.component';
import { UserRecordComponent } from './pages/user-operation/user-record/user-record.component';
import { LoginGuard } from './services/globalserv/login-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'user-operation',
    component: UserOperationComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'user-record',
    component: UserRecordComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'user-record/user/:Id',
    component: UserRecordComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'special-form',
    component: SpecialFormComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'corona',
    component: CoronaComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'chemist',
    component: ChemistComponent,
    canActivate:[LoginGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
