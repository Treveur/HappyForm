import { Component, OnInit, Injectable } from '@angular/core';
import { FormService } from '../services/formService';
import { Form } from '../models/Form';
import { State } from '../enums/state.enum';

@Component({
  selector: 'app-happyform-container',
  templateUrl: './happyform-container.component.html',
  styleUrls: ['./happyform-container.component.css']
})

@Injectable()
export class HappyformContainerComponent implements OnInit {

  forms: Array<Form> = new Array<Form>();

  constructor(private formationService: FormService) { }

  ngOnInit() {
    this.formationService.getForms()
    .subscribe(result => {
      this.forms = result.filter(r => r.State !== State.inProgress);
      // console.log(this.forms);
    });
  }
}
