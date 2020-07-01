import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }
  public addmore:FormGroup;
 public result:any = [];

  ngOnInit(){
    this.addmore=this._fb.group({
         itemRows:this._fb.array([this.initItemRows()])
    });
    }
    get formArr(){
      return this.addmore.get('itemRows')as FormArray;
    }
    initItemRows(){
      //window.location.reload();
      return this._fb.group({
        sno:[''],
        item:[''],
        descripition:[''],
        uom:[''],
        quantity:[''],
        rate:[''],
        discount:[''],
        tax:[''],
        amount:['']



      });
    }
    addNewRow()
    {
   //  console.log("hai");
      this.initItemRows().clearAsyncValidators;
      this.formArr.push(this.initItemRows());  
    }
    deleteRow(index:number)
    {
      this.formArr.removeAt(index);
      this.result.splice(index,1);
      //delete this.num2[index];
      //delete this.num1[index];
     // this.deleteval=parseInt(this.totalval)-parseInt(this.result); 
     // debugger;
    }
    
    rateDiscount()
    {
    }
    
  
  }
  


