import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { LabtopsComponent } from './components/labtops/labtops.component';
import { CameraComponent } from './components/camera/camera.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import { SonyComponent } from './components/camera/sony/sony/sony.component';
import { NikonComponent } from './components/camera/nikon/nikon/nikon.component';
import { PanasonicComponent } from './components/camera/Panasonic/panasonic/panasonic.component';
import { OlympusComponent } from './components/camera/Olympus/olympus/olympus.component';
import { FujifilmComponent } from './components/camera/Fujifilm/fujifilm/fujifilm.component';
import { HPComponent } from './components/labtops/HP/hp/hp.component';
import { DellComponent } from './components/labtops/Dell/dell/dell.component';
import { LenovoComponent } from './components/labtops/Lenovo/lenovo/lenovo.component';
import { SamsongComponent } from './components/labtops/Samsong/samsong/samsong.component';
import { AppleComponent } from './components/labtops/Apple/apple/apple.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    MobilesComponent,
    LabtopsComponent,
    CameraComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SonyComponent,
    NikonComponent,
    PanasonicComponent,
    OlympusComponent,
    FujifilmComponent,
    HPComponent,
    DellComponent,
    LenovoComponent,
    SamsongComponent,
    AppleComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
