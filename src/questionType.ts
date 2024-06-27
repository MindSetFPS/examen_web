type question = {
    text: string,
    answers: answers[]
}

type answers = {
    text: string
    isTheAnswer: boolean
}

var resp1: answers = {
    text: "diosito",
    isTheAnswer: true
}
var pregunta1: question = {
    text: "quien es papa noel?",
    answers: [
        resp1
    ]

}

var questionList = [
    pregunta1
]

export default questionList;