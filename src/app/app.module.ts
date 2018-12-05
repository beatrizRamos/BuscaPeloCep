import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import{CepService} from './cep.service';
import { CepComponent } from './cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
