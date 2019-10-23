import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  regform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.regform = new FormGroup({
      Name: new FormControl(),
      Login: new FormControl()
    });
  }

}
