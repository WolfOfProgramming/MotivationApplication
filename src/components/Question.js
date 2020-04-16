import React from 'react';
import RadioInputsFieldset from './RadioInputsFieldset';
import PageTextarea from './PageTextarea';
import { TEXTAREA, SELECT_FROM_POSSIBLE_ANSWERS } from './Constans';

export default function Question({
  question,
  questionObject,
  value,
  onChange,
}) {
  switch (questionObject.type) {
    case TEXTAREA:
      return (
        <PageTextarea
          key={question}
          description={question}
          value={value}
          onChange={(value) => onChange(question, value)}
        />
      );
    case SELECT_FROM_POSSIBLE_ANSWERS:
      return (
        <RadioInputsFieldset
          description={question}
          values={questionObject.possibleAnswers}
          chosenValue={value}
          onChange={(value) => onChange(question, value)}
        />
      );
    default:
      throw new Error();
  }
}
