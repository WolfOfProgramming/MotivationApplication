import { useReducer } from 'react';
import { QUESTIONS_FOR_CATEGORIES } from './Constans';

const INCREMENT_CURRENT_QUESTION_INDEX = 'INCREMENT_CURRENT_QUESTION_INDEX';
const DECREMENT_CURRENT_QUESTION_INDEX = 'DECREMENT_CURRENT_QUESTION_INDEX';
const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
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
      return { ...state, isError: action.boolean };
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

export function useQuestionsPannelReducer(category) {
  const [state, dispatch] = useReducer(reducer, {
    currentQuestionIndex: 0,
    answersToQuestionsObject: {},
    isError: false,
  });

  const incrementQuestionIndex = () =>
    dispatch({
      type: INCREMENT_CURRENT_QUESTION_INDEX,
    });
  const decrementQuestionIndex = () =>
    dispatch({
      type: DECREMENT_CURRENT_QUESTION_INDEX,
    });
  const addAnswerToQuestion = (key, value) =>
    dispatch({
      type: ADD_ANSWER_TO_QUESTION,
      key,
      value,
    });
  const setIsError = (boolean) =>
    dispatch({
      type: SET_IS_ERROR,
      boolean,
    });

  const shouldDisplayOverview =
    state.currentQuestionIndex + 1 > QUESTIONS_FOR_CATEGORIES[category].length;

  return {
    state,
    incrementQuestionIndex,
    decrementQuestionIndex,
    addAnswerToQuestion,
    setIsError,
    shouldDisplayOverview,
  };
}
