import React from 'react';
import RadioInputsFieldset from './RadioInputsFieldset';
import PageTextarea from './PageTextarea';

export default function Question({
  question,
  questionObject,
  value,
  onChange,
}) {
  switch (questionObject.type) {
    case 'textarea':
      return (
        <PageTextarea
          key={question}
          description={question}
          value={value}
          onChange={(value) => onChange(question, value)}
        />
      );
    case 'selectFromPossibleAnswers':
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
