import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Question } from '../models/Question';
import { UserResponse } from '../models/UserResponse';
import { InputType } from '../enums/inputType.enum';
import { UserResponseService } from '../services/userResponseService';
import { Router } from '@angular/router';
import { PATH_HOME } from '../app.routes.const';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {

  question: Question;
  // questionIndex = 0;

  UserResponses:Object = new Object();

  // Init form


  @Input()
  questions: Array<Question>;

  constructor(private userResponseService:UserResponseService, private router:Router) { }

  // initQuestion() {
  //   this.question = new Question(this.questions[this.questionIndex].Id, this.questions[this.questionIndex].Rang,
  //     this.questions[this.questionIndex].Type, this.questions[this.questionIndex].Label,
  //     this.questions[this.questionIndex].Responses, this.questions[this.questionIndex].FormId);
  // }

  handleQuestion() {
    let that = this;
    let question:Question;
    Object.keys(this.UserResponses).forEach(key => {
      
      for(let element of that.questions){
        let qq = that.questions.find(resp => {
          let retour = false;
          for(let response of resp.Responses){
            if(response.Id == Number(key)){
              retour = true;
            }
          }
          return retour;
        });
        if(qq !== undefined){
          question = qq;
        }
      }
      
      let theUserResponse = that.UserResponses[key].Input;
      if(question.Type === InputType.CheckBox || question.Type === InputType.Radio ){
        if(theUserResponse === true){
          that.UserResponses[key].Input = "true";
        }
        else if(theUserResponse === ""){
          that.UserResponses[key].Input = "false";
        }
      }
    });
    // On envoie les donnée
    // console.log('Form value', this.UserResponses);
    Object.keys(this.UserResponses).forEach(key => {
      this.userResponseService.postUserResponse(this.UserResponses[key]);
    });
    // On change de page
    this.router.navigate([PATH_HOME]);
  }

  ngOnInit() {
    console.log(this.questions);
    this.questions.forEach(element => {
      for(var i = 0 ; i < element.Responses.length ; i++){
        this.UserResponses[element.Responses[i].Id] = new UserResponse(0, "", element.Responses[i].Id);
      }
    });
    // this.initQuestion();
    // console.log(this.question);
  }

  ngOnChanges(change) {
    // console.log('CHANGE', change);
  }

}
