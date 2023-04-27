

const data = [
    {
        id:1,
        question: "What is the capital of Odisha?",
        options: {
            a: "Bhubaneswar",
            b: "Berhampur",
            c: "Cuttack"
        },
        correctAnswer: "Bhubaneswar"
    }
    , {
        id:2,
        question: "What is the national bird of India?",
        options: {
            a: "Peacock",
            b: "Peagon",
            c: "Parrot"
        },
        correctAnswer: "Peacock"
    },
    {
        id:3,
        question: "What is the national animal of India?",
        options: {
            a: "Magnificent Tiger",
            b: "Lion",
            c: "Bear"
        },
        correctAnswer: "Magnificent Tiger"
    }
]

const quiz_container = document.querySelector("#quiz_container")
const submit_btn=document.getElementById('submit_btn')
const result=document.getElementById('score');

const quizes = data.forEach(quiz => {
    quiz_container.innerHTML += `
   <div class="questions">
     <div class="quiz">${quiz.question}</div>  
     <input type="radio" name=${quiz.id} value="${quiz.options.a}">${quiz.options.a}
     <input type="radio" name=${quiz.id} value="${quiz.options.b}">${quiz.options.b}
     <input type="radio" name=${quiz.id} value="${quiz.options.c}">${quiz.options.c}
   </div>
   `
});

console.log(quiz_container.innerHTML)
console.log(submit_btn)

const handleSubmit=(e)=>{
    e.preventDefault();

// const elements=document.getElementsByTagName('input');
// console.log(elements)
// for(let i=0;i<elements.length;i++)
// {
//    if(elements[i].checked)
//    {
//      console.log(elements[i].value)
//    }
// }
 let score=0;
    for(let i=0;i<data.length;i++)
    {
        const inputList=document.getElementsByName(data[i].id)
        inputList.forEach((inputRadio)=>{
          if(inputRadio.checked)
            {
             //console.log(inputRadio.value)
              if(inputRadio.value===data[i].correctAnswer)
               {score++;}
              else{
                inputRadio.style.color="red";
              }
            }
            
        })
    }
    result.innerText=score;
    console.log(result)
}
submit_btn.addEventListener('click',handleSubmit)





