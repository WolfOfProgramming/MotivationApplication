import React from 'react';
import RadioInputsFieldset from './RadioInputsFieldset';
import PageTextarea from './PageTextarea';

const SIMPLE_YES_NO_ANSWER = ['Yes', 'No'];
const FOOD_HEALTH_LEVELS = ['Healthy', 'Moderate', 'Unhealthy', 'Hard to say'];
const LEVELS_OF_BOOKS_INTEREST = [
  'Yes, I love current books',
  'Moderate',
  'My books are boring',
  "It's hard to say",
];
const BOOKS_DAILY_READING_TIME_LEVELS = [
  'Less than 30 minutes',
  'Less than an hour',
  'Less than 2 hours',
  'Less than 3 hours',
  'More than 3 hours',
];
const BOOKS_READING_SPEED_LEVELS = [
  'Less than 200 WPM',
  'Less than 300 WPM',
  'Less than 400 WPM',
  'Less than 500 WPM',
  'More than 500 WPM',
];

function RadioInputsFieldsetWithValues(values) {
  return function render(onChange, chosenValue) {
    return (
      <RadioInputsFieldset
        description={this.question}
        values={values}
        chosenValue={chosenValue}
        onChange={(value) => onChange(this.question, value)}
      />
    );
  };
}

function RenderPropForTextarea(onChange, value) {
  return (
    <PageTextarea
      description={this.question}
      value={value}
      onChange={(value) => onChange(this.question, value)}
    />
  );
}

export const QUESTIONS_FOR_CATEGORIES = {
  Food: [
    {
      question: 'How would you rate what you ate yesterday?',
      render: RadioInputsFieldsetWithValues(FOOD_HEALTH_LEVELS),
    },
    {
      question: 'What do you wanna eat?',
      render: RenderPropForTextarea,
    },
    {
      question: "What's your reason to change eating bad habits?",
      render: RenderPropForTextarea,
    },
    {
      question: 'How do you wanna accomplish it?',
      render: RenderPropForTextarea,
    },
    {
      question: 'When you want to take the first step?',
      render: RenderPropForTextarea,
    },
  ],
  'Time managment': [
    {
      question: 'Do you have your to-do list?',
      render: RadioInputsFieldsetWithValues(SIMPLE_YES_NO_ANSWER),
    },
    {
      question: 'Do you have schedule?',
      render: RadioInputsFieldsetWithValues(SIMPLE_YES_NO_ANSWER),
    },
    {
      question: 'Have you ever tried to schedule best possible day for you?',
      render: RadioInputsFieldsetWithValues(SIMPLE_YES_NO_ANSWER),
    },
    {
      question: 'Do you try to improve your schedule sticking every day?',
      render: RenderPropForTextarea,
    },
    {
      question: 'What stops you from doing it?',
      render: RenderPropForTextarea,
    },
  ],
  Focus: [
    {
      question: 'What distracts you when you work?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Can you eliminate all distracts, while working?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Are you multitasking during work time?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you have a specific device only for work?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you have a specific place just for work?',
      render: RenderPropForTextarea,
    },
  ],
  Books: [
    {
      question: "Are you really interested in books, that you're reading?",
      render: RadioInputsFieldsetWithValues(LEVELS_OF_BOOKS_INTEREST),
    },
    {
      question: 'How much time do you spend reading every day?',
      render: RadioInputsFieldsetWithValues(BOOKS_DAILY_READING_TIME_LEVELS),
    },
    {
      question: 'Is there anything special that you want to read?',
      render: RenderPropForTextarea,
    },
    {
      question: "What's your reading speed? (WPM)",
      render: RadioInputsFieldsetWithValues(BOOKS_READING_SPEED_LEVELS),
    },
    {
      question: 'In how many days, do you wanna finish that book/books?',
      render: RenderPropForTextarea,
    },
  ],
  Learning: [
    {
      question: 'What do you want to learn?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Why do you wanna learn it?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Are you comparing your results to others?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Are you using new learning techniques, like spaced-repition?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you take notes?',
      render: RenderPropForTextarea,
    },
  ],
  'Wasting time': [
    {
      question: 'What is a waste of time for you?',
      render: RenderPropForTextarea,
    },
    {
      question: 'How many hours a day you waste?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you waste time because of bad habit?',
      render: RenderPropForTextarea,
    },
    {
      question: 'What diffrent could you accomplish in this time?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Have you ever tried to change something?',
      render: RenderPropForTextarea,
    },
  ],
  Procrastination: [
    {
      question: 'What do you want to achieve in the near future?',
      render: RenderPropForTextarea,
    },
    {
      question: 'What stops you from doing it?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Are you trying to avoid doing work?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Have you ever tried pomodoro technique?',
      render: RadioInputsFieldsetWithValues(SIMPLE_YES_NO_ANSWER),
    },
  ],
  'Planning things': [
    {
      question: 'What are you planning?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you plan the most optimistic scenario in your plans?',
      render: RenderPropForTextarea,
    },
    {
      question:
        'Did you found a reference class (something similar to your planning)?',
      render: RenderPropForTextarea,
    },
    {
      question:
        'Do you know statistical data in the reference class (as knowledge how statistically expensive kitchen renovation costs)?',
      render: RenderPropForTextarea,
    },
    {
      question:
        'Is there information in your case that tells you to move away from the statistical average?',
      render: RenderPropForTextarea,
    },
  ],
  Listening: [
    {
      question:
        'Are you listening carefully to the second person, or you are maybe thinking about other things?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you engage in conversation?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you review your conversation?',
      render: RenderPropForTextarea,
    },
    {
      question: 'How can you change it?',
      render: RenderPropForTextarea,
    },
  ],
  'Note taking': [
    {
      question: 'Are you using your own word in your notes?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Can you identify relevent information?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you underline key words?',
      render: RenderPropForTextarea,
    },
    {
      question: 'Do you review  your notes?',
      render: RenderPropForTextarea,
    },
    {
      question: 'How can you change it?',
      render: RenderPropForTextarea,
    },
  ],
};

export const CATEGORIES_NAMES = Object.keys(QUESTIONS_FOR_CATEGORIES);
