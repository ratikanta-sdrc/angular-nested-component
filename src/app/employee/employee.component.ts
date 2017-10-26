import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  first_name: string = "Ratikanta"
  last_name: string = "Pradhan"
  gender: string = "Male"
  age: number = 27

  constructor() { }

  ngOnInit() {
  }

}
