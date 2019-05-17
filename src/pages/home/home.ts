import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
total:number;

result:number;
selectGST:number =1;
GST:number;
amount:number;
changevalue:number;
valu = [
  {id:1,name:"GST Exclusive"},
  {id:2, name:"GST Inclusive"}
];
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
 
onClick(){
  
  if(this.selectGST == 1 )
  {
    
       this.result = Number(this.amount*this.GST/100);
        this.total = this.result + Number(this.amount);
      console.log(this.result);
      console.log(this.total);
      console.log(this.changevalue);
 
  }
 
  if(this.selectGST == 2){
    let res = 100+Number(this.GST);
    let div = 100/res;
    this.total = this.amount*div;
    this.result = this.amount - this.total;

    console.log(this.result);
    console.log(this.total)
  }
 
  
    }
  
  
}

