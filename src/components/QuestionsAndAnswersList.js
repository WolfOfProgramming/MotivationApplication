import React from 'react';

export default function QuestionsAndAnswersList({ answersToQuestionsObject }) {
  const questionsAndAnswers = Object.entries(answersToQuestionsObject);

  return (
    <ul className='QuestionsAndAnswersList'>
      {questionsAndAnswers.map(([question, answer], index) => (
        <li className='QuestionsAndAnswersList__item' key={index}>
          <span className='QuestionsAndAnswersList__question'>{question}</span>
          <span className='QuestionsAndAnswersList__answer'>{answer}</span>
        </li>
      ))}
    </ul>
  );
}
