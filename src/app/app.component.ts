import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyCQlhRNSLP5pAIGgJ109fbzSc2rXnAMdes",
      authDomain: "hehe-519c9.firebaseapp.com",
      databaseURL: "https://hehe-519c9.firebaseio.com",
      projectId: "hehe-519c9",
      storageBucket: "hehe-519c9.appspot.com",
      messagingSenderId: "74145389253"
    };
    firebase.initializeApp(config);
  }

}
