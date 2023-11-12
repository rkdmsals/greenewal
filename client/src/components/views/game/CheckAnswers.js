import TestEach from "./TestEach";
import TestData from "./questions.json";

function CheckAnswers() {
    return <div>
        {TestData ? TestData.map((a, idx) => <div key={idx}>
            <TestEach page={idx + 1} question={a.question} answer1={a.answer1} answer2={a.answer2} answer3={a.answer3} answer4={a.answer4} answer5={a.answer5} />
        </div>) : <div> 문제가 생김</div>}
    </div>
}

export default CheckAnswers