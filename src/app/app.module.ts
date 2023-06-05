import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { EmptyModalComponent } from './empty-modal/empty-modal.component';
import { JunaidComponent } from './junaid/junaid.component';
import { VinishaComponent } from './vinisha/vinisha.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { InvestmentsComponent } from './investments/investments.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ResetComponent,
    ForgotComponent,
    MainComponent,
    EmptyModalComponent,
    JunaidComponent,
    VinishaComponent,
    UserProfileComponent,
    PortfolioComponent,
    ServicesComponent,
    InvestmentsComponent,
    FooterComponent,
    ContactComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
