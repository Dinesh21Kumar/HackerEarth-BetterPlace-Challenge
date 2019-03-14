import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ModalModule} from 'angular-custom-modal'
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { 
  FormsModule, 
  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ChennelService } from './chennel.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpModule,
    ModalModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ChennelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
