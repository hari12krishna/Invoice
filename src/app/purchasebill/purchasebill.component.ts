import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/_modal';


@Component({
  selector: 'app-purchasebill',
  templateUrl: './purchasebill.component.html',
  styleUrls: ['./purchasebill.component.css']
})
export class PurchasebillComponent implements OnInit {
  constructor(private _fb:FormBuilder,
    private modalService: ModalService) { }
  public addmore:FormGroup;
 public result:any = [];
 public data=true;
 bodyText: string;
 public product=true;


  ngOnInit(){
    this.bodyText = 'This text can be updated in modal 1';

    this.addmore=this._fb.group({
         itemRows:this._fb.array([this.initItemRows()])
    });
    }
    selectProduct(product){
      let data=product;
     //console.log(product);

     if(data=='goods'){
       this.product=false;
       console.log(this.product);
       
     }
     else if(data == 'service')
     {
       this.product=true;
       console.log(this.product);

     }

    
    
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
    openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
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
    clickData(){
    
      this.data=false;
     
    }
    clickData2()
    {
      this.data=true;
    }
    
  
  }
  


