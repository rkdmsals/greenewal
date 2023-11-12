import "./Test.css"
function TestEach(props) {
    const page = props.page;
    const question = props.question;
    const answer1 = props.answer1;
    const answer2 = props.answer2;
    const answer3 = props.answer3;
    const answer4 = props.answer4;
    const answer5 = props.answer5;

    return (<div className="TestInner">
        <div className="TestQuestion">{page}. {question}</div>
        <div className="testAnswers">
            <div className="Answer" ><span>1</span>{answer1}</div>
            <div className="Answer"><span>2</span>{answer2}</div>
            <div className="Answer" ><span>3</span>{answer3}</div>
            <div className="Answer"><span>4</span>{answer4}</div>
            <div className="Answer" ><span>5</span>{answer5}</div>
        </div>
    </div>)
}
export default TestEach