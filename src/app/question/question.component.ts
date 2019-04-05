import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  questions: Array<Question>;

  constructor() { }

  ngOnInit() {
    console.log(this.questions);
  }

}
