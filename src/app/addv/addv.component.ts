import { Component, OnInit } from '@angular/core';
import { pureFunction5 } from '@angular/core/src/render3/pure_function';
import { AdvItemService } from '../adv-item.service';

@Component({
  selector: 'app-addv',
  templateUrl: './addv.component.html',
  styleUrls: ['./addv.component.scss'],
  
})
export class AddvComponent implements OnInit {
  elements:any;
 
  
  constructor(private advitemService : AdvItemService){

  }
  ngOnInit() {
    this.advitemService.getAllItems().subscribe(data=>{
      this.elements=data;
      console.log(data);
    },
    err=>{
      console.log(err);
    })
  }

}
