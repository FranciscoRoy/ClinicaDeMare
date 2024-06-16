import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { createPlatform, Injector } from '@angular/core';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { RegistroComponent } from './app/registro/registro.component'; // Replace with your actual component

const platform = createPlatform(BrowserModule);
const injector = Injector.create({ providers: [provideFirestore(() => getFirestore())] });
platform.bootstrapModule(RegistroComponent, { injector });

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
