import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/layouts/navbar/navbar.component';
import { AlertifyService } from './services/globalserv/alertify.service';
import { LeftmenuComponent } from './pages/layouts/leftmenu/leftmenu.component';
import { LoginComponent } from './pages/login/login.component';
import { UserOperationComponent } from './pages/user-operation/user-operation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRecordComponent } from './pages/user-operation/user-record/user-record.component';
import { AuthService } from './services/globalserv/auth.service';
import { UserFilterPipe } from './pages/user-operation/user-filter.pipe';
import { SpecialFormComponent } from './pages/special-form/special-form.component';
import { LoginGuard } from './services/globalserv/login-guard';
import { ChemistComponent } from './pages/chemist/chemist.component';
import { CoronaComponent } from './pages/corona/corona.component';
import { CoronaPipe } from './pages/corona/corona.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftmenuComponent,
    LoginComponent,
    UserOperationComponent,
    UserRecordComponent,
    UserFilterPipe,
    SpecialFormComponent,
    ChemistComponent,
    CoronaComponent,
    CoronaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AlertifyService,AuthService,LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
