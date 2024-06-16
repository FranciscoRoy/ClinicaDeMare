import { Injectable } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Firestore, provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConexionFirestoreService {

  private firestore: any;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  // Add methods for interacting with Firestore (e.g., getCollection, addDoc)
}
