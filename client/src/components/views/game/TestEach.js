import $ from "jquery"
function TestEach(props) {
    const page = props.page;
    const question = props.question;
    const answer1 = props.answer1;
    const answer2 = props.answer2;
    const answer3 = props.answer3;
    const answer4 = props.answer4;
    const answer5 = props.answer5;
    const userAnswer = props.userAnswer;
    const correctAnswer = props.correctAnswer;
    // const TestInner = document.querySelector(".TestInner");
    var gradingImg;
    var userAnswerImg = "/img/Game/user_answer.svg";
    var correctAnswerImg = "/img/Game/correct_answer.svg";
    if (userAnswer == correctAnswer) {
        //정답인 경우
        //1. 동그라미
        gradingImg = "/img/Game/correct.png"
        console.log("정답인 경우," + userAnswer)
    } else {
        //오답인 경우
        //1. 빗금
        gradingImg = "/img/Game/wrong.png"
    }
    $(document).ready
        (function () {
            if (correctAnswer != userAnswer) {

                //2. userAnswer에 검은색 체크
                //3. 정답에 빨간색 체크
                const correctTop = (correctAnswer - 1) * 23 + 107;
                $(`.CorrectAnswer${page}`).css("display", "block");
                $(`.CorrectAnswer${page}`).css("top", `${correctTop}px`);
                // $('.CheckAnswer').css("margin-top", "-23px");
            }
            const userTop = userAnswer * 23 + 107;
            $(`.UserAnswer${page}`).css("top", `${userTop}px`);
            // $('.UserAnswer').css("margin-top", "-23px");
        })

    return (<div className="TestEach">
        <img className="GradeTest" src={gradingImg}></img>
        <img className={`UserAnswer${page}`} src={userAnswerImg}></img>
        <img className={`CorrectAnswer${page}`} src={correctAnswerImg}></img>
        <div div className="TestQuestion" > {page}. {question}</div>
        <div className="Answer"><span>&#9312;</span>{answer1}</div>
        <div className="Answer"><span>&#9313;</span>{answer2}</div>
        <div className="Answer"><span>&#9314;</span>{answer3}</div>
        <div className="Answer"><span>&#9315;</span>{answer4}</div>
        <div className="Answer"><span>&#9316;</span>{answer5}</div>

    </div >)
}
export default TestEach