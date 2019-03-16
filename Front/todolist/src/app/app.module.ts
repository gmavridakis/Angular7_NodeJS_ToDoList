import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetdbdataComponent } from './getdbdata/getdbdata.component';
import { GetdblistComponent } from './getdblist/getdblist.component';
import { GetdblistService } from './getdblist.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetdbdataComponent,
    GetdblistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetdblistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
