import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";

import * as firebase from "firebase";

import { OwnFireService } from "../../../providers/own-fire.service";

import { Router } from "@angular/router";

import {UserService} from "../../../providers/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private ownFireService: OwnFireService,
    private router: Router,
    private userSrv: UserService
  ) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {

  const email = form.value.email;
  const password = form.value.password;

  console.log(email);
  console.log(password);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then( userData => {

      if ( userData.emailVerified ) {

        return this.ownFireService.getUserFromDatabase(userData.uid);

      } else {
              console.log("NO EXISTISSSS");
      }

    })
    .then( userDataFromDataBase => {
      console.log("ExisteOk");
      console.log(userDataFromDataBase);
      debugger;
      this.userSrv.set(userDataFromDataBase);
      this.router.navigate(["/posts"]);
    })

  }

}
