import { Component, OnInit, Injectable } from '@angular/core';
import { FormServiceApi } from '../services/formServiceApi';
import { Form } from '../models/Form';

@Component({
  selector: 'app-happyform-container',
  templateUrl: './happyform-container.component.html',
  styleUrls: ['./happyform-container.component.css']
})

@Injectable()
export class HappyformContainerComponent implements OnInit {

  forms: Array<Form> = new Array<Form>();

  constructor(private formationService: FormServiceApi) { }

  ngOnInit() {
    this.formationService.getForms()
      .subscribe(result => this.forms = result);
  }
}
