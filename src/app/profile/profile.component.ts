import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { AdvItemService} from '../adv-item.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  newCategory: Category=new Category();
  

  constructor(private advItemService:AdvItemService) { }

  ngOnInit() {
  }
  onClickAddCategory() {
    this.advItemService.addNewCategory(this.newCategory).subscribe(data=>{
      console.log(this.newCategory);
      window.alert("saved");
      console.log(data);
    })
     }

}
