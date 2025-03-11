const Questions = [
    {
        q: "Fill in the blank: lionel messi has scored  _____ goals in his career.",
        a: [{text: "5.", isCorrect: false},
            {text: "1.5 million.", isCorrect: false},
            {text: "850.", isCorrect: true},
            {text: "0.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: Soccer is soccer not popular in _____.",
        a: [{text: "France.", isCorrect: false},
            {text: "The Marshall Islands.", isCorrect: true},
            {text: "Mexico.", isCorrect: false},
            {text: " India.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: The nubs on cleats are for _____.",
        a: [{text: " grip.", isCorrect: true},
            {text: "stomping on players feet.", isCorrect: false},
            {text: "Poping the soccer ball.", isCorrect: false},
            {text: "picking trash up.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: Soccer was created in  _____.",
        a: [{text: "2020.", isCorrect: false},
            {text: "1890.", isCorrect: false},
            {text: "2004.", isCorrect: false},
            {text: "1863.", isCorrect: true},
           ]
    },
    {
        q: "Fill in the blank: one of the requairments to be able to paly is _____.",
        a: [{text: "candy.", isCorrect: false},
            {text: "long hair.", isCorrect: false},
            {text: "pets.", isCorrect: false},
            {text: "shin gaurds.", isCorrect: true},
           ]
    },
    {
        q: "Fill in the blank: The dimentions of a shin gaurd is _____.",
        a: [{text: " 300ft tall and 9000 ft wide.", isCorrect: false},
            {text: ".01 inches tall by 99 inches wide", isCorrect: false},
            {text: "1 inch tall and 5 inch wide.", isCorrect: false},
            {text: " 4 inches tall and 1.5 inches wide.", isCorrect: true},
           ]
    },

{
        q: "choose one: How many shin gaurds will you have ?",
        a: [{text: " 4", isCorrect: false},
            {text: "9", isCorrect: false},
            {text: "0", isCorrect: false},
            {text: "2", isCorrect: true},
           ]
    },
    {
        q: "choose one: Waht is one reason soccer is good for you ?",
        a: [{text: " it makes you cool.", isCorrect: false},
            {text: "it's not.", isCorrect: false},
            {text: "You get hurt a lot.", isCorrect: false},
            {text: "It improves muscle tone.", isCorrect: true},
           ]
    },
   
    

    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length} GOOD JOB :)`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
