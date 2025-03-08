import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
function SurveyPage() {

  let { id, step } = useParams();
  step = parseInt(step);
  const questions = [
    { title: "질문 1입니다.", desc: "설명 1입니다.", type: "text", requires: true, options: {} },
    { title: "질문 2입니다.", desc: "설명 2입니다.", type: "text", requires: true, options: {} },
  ];


  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  return <div>
    <ProgressIndicator />
    <QuestionBox
      question={questions[step]}
      questionLength={questions.length}
      step={step}
      answer={answers[step]}
      setAnswer={(newAnswer) => {
        setAnswers((answers) => {
          const newAnswers = [...answers];
          newAnswers[step] = newAnswer;
          return newAnswers;
        });
      }} />
  </div>;
}

export default SurveyPage;
