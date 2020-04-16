import React from 'react';
import { QUESTIONS_FOR_CATEGORIES } from './Constans';
import NavigationButtons from './NavigationButtons';
import ErrorMessage from './ErrorMessage';
import Overview from './Overview';
import { useQuestionsPannelReducer } from './QuestionsPanelReducer';
import Question from './Question';

export default function QuestionsPanel({ category, changeCategory }) {
  const {
    state,
    incrementQuestionIndex,
    decrementQuestionIndex,
    addAnswerToQuestion,
    setIsError,
  } = useQuestionsPannelReducer();

  const { currentQuestionIndex, answersToQuestionsObject, isError } = state;

  const shouldDisplayOverview =
    currentQuestionIndex + 1 > QUESTIONS_FOR_CATEGORIES[category].length;

  if (shouldDisplayOverview) {
    return (
      <Overview
        answersToQuestionsObject={answersToQuestionsObject}
        category={category}
      />
    );
  }

  const categoryQuestions = QUESTIONS_FOR_CATEGORIES[category];
  const currentQuestionObject = categoryQuestions[currentQuestionIndex];
  const currentQuestion = currentQuestionObject.question;
  const answerToCurrentQuestion = answersToQuestionsObject[currentQuestion];

  const handleGoBackClick = () => {
    if (currentQuestionIndex > 0) {
      decrementQuestionIndex();
      return;
    }
    changeCategory(null);
  };

  const handleGoNextClick = () => {
    if (answerToCurrentQuestion) {
      setIsError(false);
      incrementQuestionIndex();
      return;
    }
    setIsError(true);
  };

  return (
    <>
      <div className='Question__container'>
        <Question
          value={answerToCurrentQuestion}
          onChange={addAnswerToQuestion}
          questionObject={currentQuestionObject}
          question={currentQuestion}
        />
        {isError && <ErrorMessage />}
      </div>
      <NavigationButtons
        onBackClick={handleGoBackClick}
        onNextClick={handleGoNextClick}
      />
    </>
  );
}
