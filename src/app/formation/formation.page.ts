import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat//database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.page.html',
  styleUrls: ['./formation.page.css'],
})
export class FormationPage implements OnInit {
  firebasename1: string; 
  firebasename2: string; 
  firebasemail : string
  firebasemobile : string
  constructor(
    public router:Router,

    public firestore: AngularFirestore
  ) {  }

  ngOnInit() {
  }

  addFirestore() {
    this.firestore.collection('Formulaire').add({
        firstName : this.firebasename1,
        lastName : this.firebasename2,
        email : this.firebasemail,
        mobile : this.firebasemobile,
      }
      )
      ;
  }	


}