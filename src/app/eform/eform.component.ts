import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ServiceService} from 'src/app/services/service.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-eform',
  templateUrl: './eform.component.html',
  styleUrls: ['./eform.component.css']
})
export class EformComponent implements OnInit {
  addForm:FormGroup;
  success='';

  constructor(private formBuilder:FormBuilder,
              private apiService:ServiceService,
              private router:Router) { }

  ngOnInit(){
      this.addForm=this.formBuilder.group({
        fname:['',Validators.required],
        uname:['',Validators.required],
        empid:['',Validators.required],
        gender:['',Validators.required],
        dob:['',Validators.required],
        qualf:['',Validators.required],
        lctc:['',Validators.required],
        ectc:['',Validators.required],
        pnumber:['',Validators.required],
        address:['',Validators.required],

      });
  }
  onSubmit(){
    this.apiService.CreateUser(this.addForm.value)
   .subscribe(data=>{
     this.success="created successfully";

    })
  }

}
