import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { OverlayLoadingInterceptor } from './core/interceptors/overlay-loading/overlay-loading.interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: OverlayLoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
