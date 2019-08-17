// variables 

const questionquiz = [

  {
      question : ' what was the first full length cgi movie?',
      answer: ["a bugs life","toy story","the lion king",] ,
      correctanswer : "toy story"

  },

{
  question : 'which of those is not name spice girls?',
  answer: ["sporty spice ","fred spice"," scary spicce "," posh spice", ] ,
  correctanswer :"fred spices"

},
{
  question: 'which nba team won the most tittles in  the 90 s ?',
  answer: ["newyork","portland","los angeles","chicago"] ,
  correctanswer :"chicago"

},
{
  question : ' which popular disney movie future the song circle of life',
  answer: ["aladin","hereclos ","mulan ","the lion king"] ,
  correctanswer :"the lion king"

}
];

let counter=0;
// by defoult starting from 
//the array of first questin
let currentquestion=0;
// variable that collects scoer
let score =0; 
 //variable that collects losses 
let loss = 0;
let timer =30;
//var card= $("#testarea");

// function to display the questions 
function loadquestions(){
  $('.time').append('countdown:'+timer);
  let questionCount = 1;
  for (let i = 0; i < questionquiz.length; i++) {
    let question = questionquiz[i].question;
    let answer = questionquiz[i].answer;
    let correctanswer = questionquiz[i].correctanswer;
  
 
 
 $('.game').append(question + "<br>");

//  $('.game').append("   <input type='radio' name='question1' value='answer'   >" + answer + "<br>");

 for (let j = 0; j < answer.length; j++) {
  $('.game').append("   <input type='radio' name='" + questionCount + "' value='"+ answer[j]+ " '   >" + answer[j] + "<br>");
   
    }
    questionCount++;
  }

}

 loadquestions();
 questionCount=4;
 var myVar = setInterval(myTimer, 1000);
function myTimer() {
  $('.time').html('countdown:'+timer);
  timer--;
  if(timer<=0){
    myStopFunction();
    
  } 
}

function myStopFunction() {
  clearInterval(myVar);
}
myTimer();
 $("#submit").click(function(){
   
    for(let i=0; i<questionCount.length; i++){
    for( let j=0; j<4; j++){
       if([i].checked === correctanswer){
         
           score ++;
          }
          
          return score;

     }
       
     
      
     
     
    
   }
   
   
   $('.game').html('your score:'+ score );
   
   

   
  
   

  
 })
  
 
 

 
 












 

 





 

