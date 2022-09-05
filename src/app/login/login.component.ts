import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaz/user';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  estado: Boolean = false;
  mensaje: String = "";

  constructor(public fb: FormBuilder, private loginService: LoginService, private router: Router, private userService: UserService) {
    this.form = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
   }

  ngOnInit(): void {

  }

  submitForm(data: FormGroup) {
    this.userService.getUserByEmail(this.form.controls['email'].value).subscribe((res: any) => {
      console.log(res)
      this.userService.ouruser = res as User
      console.log(this.userService.myuser)
    })
    this.loginService.login(data).subscribe((res: any) => {
      if(res.status === 200) {
        this.router.navigate(['home'])
      }
    }, (error) => {
      this.mensaje = error.error.message
      this.estado = error.error.pass
    })
  }

}
