import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario : FormGroup = this.fb.group({
    name : ['Test2', [Validators.required] ],
    email : ['test2@test.com', [Validators.required, Validators.email] ],
    password: ['123456', [Validators.required, Validators.minLength(6)] ],
  });

  constructor( 
    private fb : FormBuilder,
    private router : Router  
  ) { }

  registro():void{
    console.log(this.miFormulario.value);
    this.router.navigateByUrl('/dashboard')
  }

}
