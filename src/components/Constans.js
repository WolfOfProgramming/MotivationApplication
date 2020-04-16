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

export const QUESTIONS_FOR_CATEGORIES = {
  Food: [
    {
      question: 'How would you rate what you ate yesterday?',
      type: 'selectFromPossibleAnswers',
      possibleAnswers: FOOD_HEALTH_LEVELS,
    },
    {
      question: 'What do you wanna eat?',
      type: 'textarea',
    },
    {
      question: "What's your reason to change eating bad habits?",
      type: 'textarea',
    },
    {
      question: 'How do you wanna accomplish it?',
      type: 'textarea',
    },
    {
      question: 'When you want to take the first step?',
      type: 'textarea',
    },
  ],
  'Time managment': [
    {
      question: 'Do you have your to-do list?',
      type: 'selectFromPossibleAnswers',
      possibleAnswers: SIMPLE_YES_NO_ANSWER,
    },
    {
      question: 'Do you have schedule?',
      type: 'selectFromPossibleAnswers',
      possibleAnswers: SIMPLE_YES_NO_ANSWER,
    },
    {
      question: 'Have you ever tried to schedule best possible day for you?',
      type: 'selectFromPossibleAnswers',
      possibleAnswers: SIMPLE_YES_NO_ANSWER,
    },
    {
      question: 'Do you try to improve your schedule sticking every day?',
      type: 'textarea',
    },
    {
      question: 'What stops you from doing it?',
      type: 'textarea',
    },
  ],
  Focus: [
    {
      question: 'What distracts you when you work?',
      type: 'textarea',
    },
    {
      question: 'Can you eliminate all distracts, while working?',
      type: 'textarea',
    },
    {
      question: 'Are you multitasking during work time?',
      type: 'textarea',
    },
    {
      question: 'Do you have a specific device only for work?',
      type: 'textarea',
    },
    {
      question: 'Do you have a specific place just for work?',
      type: 'textarea',
    },
  ],
  Books: [
    {
      question: "Are you really interested in books, that you're reading?",
      type: 'selectFromPossibleAnswers',
      possibleAnswers: LEVELS_OF_BOOKS_INTEREST,
    },
    {
      question: 'How much time do you spend reading every day?',
      type: 'selectFromPossibleAnswers',
      possibleAnswers: BOOKS_DAILY_READING_TIME_LEVELS,
    },
    {
      question: 'Is there anything special that you want to read?',
      type: 'textarea',
    },
    {
      question: "What's your reading speed? (WPM)",
      type: 'selectFromPossibleAnswers',
      possibleAnswers: BOOKS_READING_SPEED_LEVELS,
    },
    {
      question: 'In how many days, do you wanna finish that book/books?',
      type: 'textarea',
    },
  ],
  Learning: [
    {
      question: 'What do you want to learn?',
      type: 'textarea',
    },
    {
      question: 'Why do you wanna learn it?',
      type: 'textarea',
    },
    {
      question: 'Are you comparing your results to others?',
      type: 'textarea',
    },
    {
      question: 'Are you using new learning techniques, like spaced-repition?',
      type: 'textarea',
    },
    {
      question: 'Do you take notes?',
      type: 'textarea',
    },
  ],
  'Wasting time': [
    {
      question: 'What is a waste of time for you?',
      type: 'textarea',
    },
    {
      question: 'How many hours a day you waste?',
      type: 'textarea',
    },
    {
      question: 'Do you waste time because of bad habit?',
      type: 'textarea',
    },
    {
      question: 'What diffrent could you accomplish in this time?',
      type: 'textarea',
    },
    {
      question: 'Have you ever tried to change something?',
      type: 'textarea',
    },
  ],
  Procrastination: [
    {
      question: 'What do you want to achieve in the near future?',
      type: 'textarea',
    },
    {
      question: 'What stops you from doing it?',
      type: 'textarea',
    },
    {
      question: 'Are you trying to avoid doing work?',
      type: 'textarea',
    },
    {
      question: 'Have you ever tried pomodoro technique?',
      type: 'selectFromPossibleAnswers',
      possibleAnswers: SIMPLE_YES_NO_ANSWER,
    },
  ],
  'Planning things': [
    {
      question: 'What are you planning?',
      type: 'textarea',
    },
    {
      question: 'Do you plan the most optimistic scenario in your plans?',
      type: 'textarea',
    },
    {
      question:
        'Did you found a reference class (something similar to your planning)?',
      type: 'textarea',
    },
    {
      question:
        'Do you know statistical data in the reference class (as knowledge how statistically expensive kitchen renovation costs)?',
      type: 'textarea',
    },
    {
      question:
        'Is there information in your case that tells you to move away from the statistical average?',
      type: 'textarea',
    },
  ],
  Listening: [
    {
      question:
        'Are you listening carefully to the second person, or you are maybe thinking about other things?',
      type: 'textarea',
    },
    {
      question: 'Do you engage in conversation?',
      type: 'textarea',
    },
    {
      question: 'Do you review your conversation?',
      type: 'textarea',
    },
    {
      question: 'How can you change it?',
      type: 'textarea',
    },
  ],
  'Note taking': [
    {
      question: 'Are you using your own word in your notes?',
      type: 'textarea',
    },
    {
      question: 'Can you identify relevent information?',
      type: 'textarea',
    },
    {
      question: 'Do you underline key words?',
      type: 'textarea',
    },
    {
      question: 'Do you review  your notes?',
      type: 'textarea',
    },
    {
      question: 'How can you change it?',
      type: 'textarea',
    },
  ],
};

export const CATEGORIES_NAMES = Object.keys(QUESTIONS_FOR_CATEGORIES);
