import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './componentes/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule} from'@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { ServicosComponent } from './componentes/servicos/servicos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FornelComponent } from './componentes/fornel/fornel.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule}from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { ParceirosComponent } from './componentes/parceiros/parceiros.component';
import { EmailComponent } from './componentes/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    CarouselComponent,
    ServicosComponent,
    FooterComponent,
    FornelComponent,
    ParceirosComponent,
    EmailComponent
  ],entryComponents:[EmailComponent],
  imports: [
    BrowserModule,MatCardModule,
    MatProgressBarModule,MatProgressSpinnerModule,
    AppRoutingModule,MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,CarouselModule,
    MatListModule,
    MatSidenavModule, MatDividerModule,
    MatTooltipModule,
    MatInputModule,FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    IvyCarouselModule,
    MatDialogModule,
    MatSnackBarModule,
   
  ],
  providers: [



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
