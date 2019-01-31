import { Component, OnInit } from '@angular/core';
import { pureFunction5 } from '@angular/core/src/render3/pure_function';

@Component({
  selector: 'app-addv',
  templateUrl: './addv.component.html',
  styleUrls: ['./addv.component.scss'],
  
})
export class AddvComponent implements OnInit {
  elements: any = [
    {id: '001', Cid:'1', IC:'003', name: 'Thilakawardane', current: 'Rs.1200', image: 'assets/p1.jpg', prize: 'Rs.500', discount:'20%',startDate:'2019-01-01', endDate:'2019-02-28'},
    {id: '002', Cid:'1', IC:'125', name: 'Shoe Plaza', current: 'Rs.2500', image: 'assets/p2.jpg', prize: 'Rs.2250', discount:'10%', startDate:'2019-01-01', endDate:'2019-02-28'},
    {id: '004', Cid:'1', IC:'452', name: 'Vogue Jewellers', current: 'Rs.50000', image: 'assets/p3.png', prize: 'Rs.45000', discount:'10%', startDate:'2019-01-01', endDate:'2019-02-28'},
    {id: '005', Cid:'2', IC:'004', name: 'Kandy', current: 'Rs.2500', image: 'assets/p4.jpg', prize: 'Rs.2000', discount:'25%', startDate:'2019-01-01', endDate:'2019-02-28'},
    {id: '005', Cid:'3', IC:'560', name: 'Kandy', current: 'Rs.2500', image: 'assets/p5.jpg', prize: 'Rs.2000', discount:'25%', startDate:'2019-01-01', endDate:'2019-02-28'},
    
  ];

  

  ngOnInit() {
  }

}
