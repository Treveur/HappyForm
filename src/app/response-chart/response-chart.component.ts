import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/Question';
import { InputType } from '../enums/inputType.enum';
import { Response } from '../models/Response';
import { UserResponse } from '../models/UserResponse';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-response-chart',
  templateUrl: './response-chart.component.html',
  styleUrls: ['./response-chart.component.css']
})
export class ResponseChartComponent implements OnInit {

  @Input()
  questions: Array<Question>;

  initUserResponse: Array<UserResponse>;
  initUserResponseForAQuestion: Array<UserResponse>;

  constructor() { }

  ngOnInit() {
    console.log(this.questions);
    for (const question of this.questions) {
      for (const response of question.Responses) {
        // console.log('Une réponse', response);
        // console.log(response.numberUserResponse);
        this.initUserResponse = response.UserResponses.filter(r => r.ResponseId === response.Id);
        console.log(response.UserResponses.filter(r => r.ResponseId === response.Id));
      }
    }
    // console.log(this.userResponses);
  }

}
