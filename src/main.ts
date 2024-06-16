import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Replace with your actual component

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
  
/*import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { createPlatform, Injector } from '@angular/core';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './app/environments/environment';

const platform = createPlatform(BrowserModule);
const injector = platform.injector;
/*Injector.create({ providers: [provideFirestore(() => getFirestore())] });
platform.bootstrapModule(AppComponent, { injector });
/*
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
*/

