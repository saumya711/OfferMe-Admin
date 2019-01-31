import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  elements: any = [
    {id: 1, address: 'mathara', email:'anura@gmail.com', telephone: '0758645987', name: '@mdo', username:'anura'},
  ];

  headElements = ['ID', 'address', 'Name', 'Contact_Number', 'E-mail', 'User name' ];
  constructor() { }

  ngOnInit() {
  }

}
