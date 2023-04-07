import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-assignment',
  templateUrl: './binding-assignment.component.html',
  styleUrls: ['./binding-assignment.component.css']
})
export class BindingAssignmentComponent implements OnInit {

  userName='';
  empty = true;
  constructor() { }

  ngOnInit() {
  }

  OnInputUserName(){
    if(this.userName === ''){
      this.empty = true;
    }else{
      this.empty = false;
    }
  }

  OnClick() {
    this.userName = '';
    this.empty = true;
  }
}
