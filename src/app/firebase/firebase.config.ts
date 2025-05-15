import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "tu apiKey",
    authDomain: "tu authDomain",
    projectId: "tu projectId",
    storageBucket: "tu storageBucket",
    messagingSenderId: "tu messagingSenderId",
    appId: "tu appId"
};

export const firebaseProviders = [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
];
