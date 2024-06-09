import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"clinicademare-123456","appId":"1:853614294282:web:d6d5a312f92ebe41c136f3","storageBucket":"clinicademare-123456.appspot.com","apiKey":"AIzaSyDGxuXI0y-mQyZntTFK2FIXAfWQBic97b0","authDomain":"clinicademare-123456.firebaseapp.com","messagingSenderId":"853614294282"})), provideAuth(() => getAuth())]
};
