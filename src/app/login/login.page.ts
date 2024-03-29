import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any = {};

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(){
    if(this.user.email && this.user.password) {
      this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then((res)=>{
        console.log(res);

        this.router.navigateByUrl('/home');
      }).catch(e=> {
        console.log(e);
      })
  }
  }
}
