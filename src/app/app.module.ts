import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { AuthService } from './services/auth.service';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireModule,
    CoreModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
