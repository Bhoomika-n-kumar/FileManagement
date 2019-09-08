import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService, private share: SharingService) { }

  message: any;
  name = '';

  ngOnInit() {
     //this.loginModel = this.login.getData();
  } 

  loginModel;  //= new Login('','');

  //User: string = (this.loginModel.username + 'is stored');

  onSubmit()
  {
    console.log(this.login.currentUser);
    alert(this.login.currentUser.username + ' is logged in');
    //this.message  = this.login.currentUser.username;
    //this.share.setData(this.login.currentUser.username);
    //let label1 = document.createElement('label');
    //label1.setAttribute('style','margin-top:0px;');
    //document.body.appendChild(label1);
    /*welcometext txt =  this.login.currentUser.username ;
    let b = document.createTextNode("Welcome " + txt);
    label1.appendChild(b);*/
    //let link = document.createAttribute('routerLink');
    } 

  create(user: Login)
  {
    this.login.createUser(user).subscribe();
  }

  /* not needed setDataCom(user: string)
  {
    let user = this.login.currentUser.username;
    this.login.setData(user);
    console.log('yes');
  }*/

  /*clearUser() {    
    this.login.currentUser = { 
      id: null,
      username: '', 
      password: ''
    }
  } */
}
