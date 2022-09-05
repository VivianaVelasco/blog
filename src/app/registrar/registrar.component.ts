import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  form: FormGroup;
  message: string = "";

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService ) { 
    this.form = this.fb.group({
      name: new FormControl('', Validators.minLength(3)),
      lastname: new FormControl('', Validators.minLength(3)),
      phone_number: new FormControl('', Validators.minLength(10)),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(3))
    })
  }

  ngOnInit(): void {
  }

  submitRegistrar(dataForm: FormGroup) {
    this.loginService.register(dataForm).subscribe((res: any) => {
      if(res.status === 200) {
        this.router.navigate(['login'])
      }
    }, (error) => {
      this.message = error.error.message
    })
  }

}
