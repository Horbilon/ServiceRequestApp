import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { ShowRequestComponent } from './request/show-request/show-request.component';
import { AddEditRequestComponent } from './request/add-edit-request/add-edit-request.component';
import { RequestApiService } from './request-api.service';
import { AddRequestComponent } from './add-request/add-request.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    ShowRequestComponent,
    AddEditRequestComponent,
    AddRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
