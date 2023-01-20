import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
public questionList : any =[];
public currentQuestion : number = 0;
public points : number = 0;
progress:string="0";


  constructor(private questionService : QuestionsService){}


  ngOnInit(): void{
    this.getAllQuestions();
    
  }
  getAllQuestions(){ 
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      console.log(res);
      this.questionList = res.questions;
    })
  }
  nextQuestion(){
    this. currentQuestion++;
    
  }
  previousQuestion(){
    this. currentQuestion--; 
  }
  answer(currentQ:number,option:any){
    if(option.correct){
      this.points+=15;
      
    }
    else{
      this.points-=5;
      this.currentQuestion++;
    }
  }


}
