var user = prompt('please enter your name')
function identify(){
    var welcome = document.querySelector('.greeting').children[0]
  welcome.innerHTML = welcome.innerHTML+ user
}
identify()


const levels = document.querySelector('.levels').children[1]
levels.addEventListener('click',function(){
 var active =  document.createElement('div')
 var p1 = document.createElement('p')
 var p2 = document.createElement('p')
 var p3 = document.createElement('p')
 p1.innerHTML='Easy'
 p1.style.cursor='pointer'

 p2.innerHTML = 'Middle'
 p2.style.cursor='pointer'
 p3.innerHTML = 'hard'
 p3.style.cursor='pointer'
 p3.onclick =function(){

  hardLevel()
 }
active.appendChild(p1)
active.appendChild(p2)
active.appendChild(p3)
document.body.children[1].appendChild(active)
active.classList.add('active')
})

var currentQuestion = document.querySelector('.questions')

  var next = document.getElementById('next')
  
  var questions = ['is the capital of france paris?','is the sun a star?','is the nile the longest river in the world?','is choclat made from cocoa beans?','is the human body made of 60% water?', 'is leonardo Davinci a hollywood actor?','is the moon light its own light?','is the Eiffel tower taller than liberty status?','is the Panda a bear','is the Earth flat?']
  var h3=document.querySelector('.check-response').children[0]
  currentQuestion.innerHTML =questions[0]
  
  const yes = document.getElementById('yes')
  const no = document.getElementById('no')
  const answers = ['yes','yes','yes','yes','no','no','no','yes','yes','no']
function checking(button,quest,answ){
  
 
  button.onclick=function(){
    var questionIndex = quest.indexOf( currentQuestion.innerHTML)
    
    if(button.innerHTML===answ[questionIndex]){
      
      
        h3.innerHTML = 'you are right!'
        var score = document.querySelector('.score').children[1]
        score.innerHTML = parseInt(score.innerHTML )+ 10
      
      
    }
    else h3.innerHTML = 'you are wrong!'
  }
}
var i =0 
function nextClick(ques){
  next.addEventListener('click',function(){
    i++
    if(i>ques.length-1){
    
     currentQuestion.innerHTML = 'no more questions'
     currentQuestion.style.fontSize='20px'
     currentQuestion.style.color = 'red'
     console.log(currentQuestion.innerHTML)
    }
    currentQuestion.innerHTML = ques[i]
    h3.innerHTML = ''
 
   })
}


  nextClick(questions)
  checking(yes,questions,answers)
checking(no,questions,answers)




const answers2 = ['yes','yes','no','yes','no','no']
function hardLevel(){

  const questionsH = ['In school, Albert Einstein failed most of the subjects, except for physics and math.',
  "The first song ever sung in the space was “Happy Birthday.",
"The first country in the world to use postcards was the United States of America",
"A male canary tends to have a better singing voice than a female canary.",
"Tea contains more caffeine than coffee and soda.",
"Dogs have an appendix."]
nextClick(questionsH )
currentQuestion.innerHTML =(i+1)+'. ' +questionsH[0]
checking(yes,questionsH,answers2)
checking(no,questionsH,answers2)
}
