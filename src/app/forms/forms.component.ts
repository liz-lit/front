import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {
  @Input() name;
  @Input() login;
  @Output() afterRequest = new EventEmitter();

  // regform: FormGroup;
  constructor(private api: ApiService) { }

  create() {
    this.api
      .postData(this.name, this.login)
      .subscribe(() => {
        this.name = null;
        this.login = null;
        this.afterRequest.emit();
      });
  }
  // implements OnInit
//  ngOnInit() {
  //  this.regform = new FormGroup({
    //  Name: new FormControl(),
      // Login: new FormControl()
    // });
  // }

}
