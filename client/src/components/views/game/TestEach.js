
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
    const TestInner = document.querySelector(".TestInner");
    var gradingImg;
    var userAnswerImg;
    var correctAnswerImg;
    if (userAnswer === correctAnswer) {
        //정답인 경우
        //1. 동그라미
        gradingImg = "/img/Game/correct.png"
        //2. userAnswer에 검은색 체크
    } else {
        //오답인 경우
        //1. 빗금
        gradingImg = "/img/Game/wrong.png"
        //2. userAnswer에 검은색 체크
        //3. 정답에 빨간색 체크
    }

    return (<div className="TestEach">
        <img className="GradeTest" src={gradingImg}></img>
        {/* <img className="UserAnswer" src={userAnswerImg}></img>
        <img className="CheckAnswer" src={correctAnswerImg}></img> */}
        <div div className="TestQuestion" > {page}. {question}</div>
        <div className="Answer"><span>&#9312;</span>{answer1}</div>
        <div className="Answer"><span>&#9313;</span>{answer2}</div>
        <div className="Answer"><span>&#9314;</span>{answer3}</div>
        <div className="Answer"><span>&#9315;</span>{answer4}</div>
        <div className="Answer"><span>&#9316;</span>{answer5}</div>

    </div >)
}
export default TestEach