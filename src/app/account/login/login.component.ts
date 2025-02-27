import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import {Userloginfo} from '../userloginfo';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  datasaved = false;
  message: string = '';
  status:string = '';

  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) { }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(logininfo:Userloginfo) {
    this.accountservice.userlogin(logininfo).subscribe((res) => {
       let resp=JSON.stringify(res);
       console.log(resp);
        // this.datasaved = true;
        // this.message = res['msg'];
        // this.status = res['status'];
        // if(res['status']=='success'){
        // localStorage.setItem('Loginuser',resp)
        // }else{
        //   localStorage.removeItem('Loginuser');
        // }
       this.loginForm.reset();
      }
    )
  }

}