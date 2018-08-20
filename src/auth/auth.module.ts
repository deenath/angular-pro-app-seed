import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third party
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'login'
      },
      {
        path: 'login', loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'register', loadChildren: './register/register.module#RegisterModule'
      },
    ]
  }
]

export const FIREBASE_CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyA_KZdzxNcwF0QADuc-zgP991sgFIwe2kQ",
  authDomain: "fitness-app-41fb5.firebaseapp.com",
  databaseURL: "https://fitness-app-41fb5.firebaseio.com",
  projectId: "fitness-app-41fb5",
  storageBucket: "fitness-app-41fb5.appspot.com",
  messagingSenderId: "919832491616"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule { }
