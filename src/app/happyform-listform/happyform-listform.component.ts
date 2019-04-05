import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../models/Form';
import { Router } from '@angular/router';
import { PATH_FORM } from '../app.routes.const';
import { from } from 'rxjs';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-happyform-listform',
  templateUrl: './happyform-listform.component.html',
  styleUrls: ['./happyform-listform.component.css']
})
export class HappyformListformComponent implements OnInit {

  @Input()
  forms: Array<Form>;

  form: Form;

  constructor() { }

  ngOnInit() {
  }

}
