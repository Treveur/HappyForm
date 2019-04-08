import { Component, OnInit, Injectable } from '@angular/core';
import { FormService } from '../services/formService';
import { Form } from '../models/Form';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

@Injectable()
export class FormComponent implements OnInit {

  form: Form;
  id: string;

  constructor(private formService: FormService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formService.getForm(Number(this.id))
      .subscribe(r => {
        console.log('subscribe');
        this.form = r;
      });
  }

}
