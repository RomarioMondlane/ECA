import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  progress:any;
  telphone?:number
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  textFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.max(15),
    Validators.min(5) 
  ]);
  SubjectFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  
  value=""
  matcher = new MyErrorStateMatcher();

  constructor(private snack:MatSnackBar,private http:HttpClient) { 
    



  }

  ngOnInit(): void {
      
    
  }

   send(){
    
    if( this. emailFormControl.valid  && this.textFormControl.valid && this.SubjectFormControl){
    
    let msg= this.textFormControl.value
    this.progress=msg
    let res:any;
    let name=this.nameFormControl.value
    let email=this.emailFormControl.value
    let body=this.textFormControl.value
    
    msg="De:   "+name +" Email "+email+" Messagem: "+body
    
    if(this.telphone){
      msg +=" Telefone: "+this.telphone
    }
    let to="info@farnel.co.mz"
    let headers = new HttpHeaders() ;
    headers=headers.set('content-type','form-data');
    headers=headers.set('Acces-Control-Allow','*')
     this.http.get(`https://farnelemail.herokuapp.com/email?to=${to}
     &from=${this.emailFormControl.value}&subject=${this.SubjectFormControl.value}&body=${msg}`,{headers,responseType:'text' as 'json'}).subscribe
     (data=>{  
      res=data;
      this.progress=undefined ;
      this.showMessage(res);
      })



   }else{

    
    
    this.showMessageError("Dados invalidos");
    
    

   }
  }
  showMessage(msg: string): void{
    
    this.snack.open(msg,' ',{
      duration:2000,
      horizontalPosition:"center",
      verticalPosition:"top",
      panelClass: ['blue-snackbar']

    })
  }

  showMessageError(msg: string): void{
    
    this.snack.open(msg,' ',{
      duration:2000,
      horizontalPosition:"center",
      verticalPosition:"top",
      panelClass: ['error-snackbar']

    })
  }

}
