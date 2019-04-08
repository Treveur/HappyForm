import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Question } from '../models/Question';
import { UserResponse } from '../models/UserResponse';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {

  question: Question;
  // questionIndex = 0;

  UserResponses: Array<UserResponse>;

  // Init form


  @Input()
  questions: Array<Question>;

  constructor() { }

  // initQuestion() {
  //   this.question = new Question(this.questions[this.questionIndex].Id, this.questions[this.questionIndex].Rang,
  //     this.questions[this.questionIndex].Type, this.questions[this.questionIndex].Label,
  //     this.questions[this.questionIndex].Responses, this.questions[this.questionIndex].FormId);
  // }

  handleQuestion(value) {
    console.log('Form value', value);
  }

  ngOnInit() {
    console.log(this.questions);
    // this.initQuestion();
    // console.log(this.question);
  }

  ngOnChanges(change) {
    // console.log('CHANGE', change);
  }

}
