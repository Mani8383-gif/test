import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { loginservice } from './app.service';
import { loginuser } from './app.model';
import { HttpClient } from '@angular/common/http';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[loginservice]
})
export class AppComponent {
  loginuser!:loginuser
  loginService=inject(loginservice)
  reactiveform:any
constructor(private fb:FormBuilder){
  this.reactiveform=this.fb.group({
  username: ['',[Validators.required,Validators.minLength(4)]]
  ,password:['',[Validators.required, Validators.maxLength(12)]]

})
  
}


senddata(){
  console.log(this.reactiveform.value)
  if(this.reactiveform.valid){
     this.loginService.login(this.reactiveform.value).subscribe({
    next:((res:any)=>{
    localStorage.setItem('token',JSON.stringify( res.accessToken))
    
    
    })
  })
  }
 
}
}
