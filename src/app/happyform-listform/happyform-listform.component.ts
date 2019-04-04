import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../models/Form';

@Component({
  selector: 'app-happyform-listform',
  templateUrl: './happyform-listform.component.html',
  styleUrls: ['./happyform-listform.component.css']
})
export class HappyformListformComponent implements OnInit {

  @Input()
  forms: Array<Form>;

  constructor() { }

  ngOnInit() {
  }

}
