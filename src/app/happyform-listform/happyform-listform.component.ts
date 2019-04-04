import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../models/Form';
import { Router } from '@angular/router';
import { PATH_DETAIL_FORM } from '../app.routes.const';

@Component({
  selector: 'app-happyform-listform',
  templateUrl: './happyform-listform.component.html',
  styleUrls: ['./happyform-listform.component.css']
})
export class HappyformListformComponent implements OnInit {

  @Input()
  forms: Array<Form>;

  constructor(private router: Router) { }

  navigateToDetailForm(formId: number){
    // this.router.navigate(`${[PATH_DETAIL_FORM]}${formId}`);
  }

  ngOnInit() {
  }

}
