import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../services/formService';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../models/Form';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  id: string;
  form: Form;

  constructor(private formService: FormService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formService.getForm(Number(this.id))
      .subscribe(r => {
        // console.log('subscribe');
        this.form = r;
      });
  }

}
