import React from 'react';
import { QUESTIONS_FOR_CATEGORIES } from './APIUtils';
import NavigationButtons from './NavigationButtons';
import ErrorMessage from './ErrorMessage';
import { NO_CATEGORY } from './PageMainSection';

export default function Question(props) {
  const {
    currentQuestionIndex,
    chosenCategory,
    isError,
    answersToQuestionsObject,
    incrementCurrentQuestionIndexWithDispatch,
    decrementCurrentQuestionIndexWithDispatch,
    addAnswerToQuestionWithDispatch,
    setIsErrorWithDispatch,
    setCategoryWithDispatch,
  } = props;

  const categoryQuestions = QUESTIONS_FOR_CATEGORIES[chosenCategory];
  const categoryCurrentQuestionObject = categoryQuestions[currentQuestionIndex];
  const categoryCurrentQuestion = categoryCurrentQuestionObject.question;
  const answerToCurrentQuestion =
    answersToQuestionsObject[categoryCurrentQuestion];

  const handleGoBackClick = () => {
    if (currentQuestionIndex > 0) {
      decrementCurrentQuestionIndexWithDispatch();
      return;
    }
    setCategoryWithDispatch(NO_CATEGORY);
  };

  const handleGoNextClick = () => {
    if (answerToCurrentQuestion) {
      setIsErrorWithDispatch(false);
      incrementCurrentQuestionIndexWithDispatch();
      return;
    }
    setIsErrorWithDispatch(true);
  };

  return (
    <>
      <div className='Question__container'>
        {categoryCurrentQuestionObject.render(
          addAnswerToQuestionWithDispatch,
          answerToCurrentQuestion
        )}
        {isError && <ErrorMessage />}
      </div>
      <NavigationButtons
        onBackClick={handleGoBackClick}
        onNextClick={handleGoNextClick}
      />
    </>
  );
}
