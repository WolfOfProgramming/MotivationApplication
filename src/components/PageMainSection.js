import React, { useReducer } from 'react';
import CategorySelection from './CategorySelection';
import { CATEGORIES_NAMES, QUESTIONS_FOR_CATEGORIES } from './APIUtils';
import Question from './Question';
import Overview from './Overview';

export const NO_CATEGORY = '';

const INCREMENT_CURRENT_QUESTION_INDEX = 'INCREMENT_CURRENT_QUESTION_INDEX';
const DECREMENT_CURRENT_QUESTION_INDEX = 'DECREMENT_CURRENT_QUESTION_INDEX';
const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_IS_ERROR = 'SET_IS_ERROR';

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_CURRENT_QUESTION_INDEX:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case DECREMENT_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        isError: false,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };
    case SET_IS_ERROR:
      return { ...state, isError: action.value };
    case SET_CATEGORY:
      return {
        ...state,
        chosenCategory: action.value,
        answersToQuestionsObject: {},
        isError: false,
      };
    case ADD_ANSWER_TO_QUESTION:
      return {
        ...state,
        answersToQuestionsObject: {
          ...state.answersToQuestionsObject,
          [action.key]: action.value,
        },
      };
    default:
      throw new Error();
  }
}

export default function PageMainSection() {
  const [state, dispatch] = useReducer(reducer, {
    currentQuestionIndex: 0,
    answersToQuestionsObject: {},
    isError: false,
    chosenCategory: NO_CATEGORY,
  });

  const incrementCurrentQuestionIndexWithDispatch = () =>
    dispatch({ type: INCREMENT_CURRENT_QUESTION_INDEX });
  const decrementCurrentQuestionIndexWithDispatch = () =>
    dispatch({ type: DECREMENT_CURRENT_QUESTION_INDEX });
  const setIsErrorWithDispatch = (value) =>
    dispatch({ type: SET_IS_ERROR, value });
  const addAnswerToQuestionWithDispatch = (key, value) =>
    dispatch({
      type: ADD_ANSWER_TO_QUESTION,
      key,
      value,
    });
  const setCategoryWithDispatch = (value) =>
    dispatch({
      type: SET_CATEGORY,
      value,
    });

  const {
    chosenCategory,
    currentQuestionIndex,
    answersToQuestionsObject,
  } = state;
  const isCategoryChosen = Boolean(chosenCategory);
  const isFinished =
    isCategoryChosen &&
    currentQuestionIndex >= QUESTIONS_FOR_CATEGORIES[chosenCategory].length;

  return (
    <main>
      {isFinished ? (
        <Overview
          answersToQuestionsObject={answersToQuestionsObject}
          chosenCategory={chosenCategory}
        />
      ) : isCategoryChosen ? (
        <Question
          {...state}
          incrementCurrentQuestionIndexWithDispatch={
            incrementCurrentQuestionIndexWithDispatch
          }
          decrementCurrentQuestionIndexWithDispatch={
            decrementCurrentQuestionIndexWithDispatch
          }
          setIsErrorWithDispatch={setIsErrorWithDispatch}
          addAnswerToQuestionWithDispatch={addAnswerToQuestionWithDispatch}
          setCategoryWithDispatch={setCategoryWithDispatch}
        />
      ) : (
        <CategorySelection
          categories={CATEGORIES_NAMES}
          onClick={setCategoryWithDispatch}
        />
      )}
    </main>
  );
}
