import React, { useState } from 'react';
import CategorySelection from './CategorySelection';
import { CATEGORIES_NAMES } from './Constans';
import QuestionsPanel from './QuestionsPanel';

export default function PageMainSection() {
  const [category, setCategory] = useState(null);
  const isCategory = Boolean(category);

  const changeCategory = (value) => setCategory(value);

  return (
    <main>
      {isCategory ? (
        <QuestionsPanel changeCategory={changeCategory} category={category} />
      ) : (
        <CategorySelection
          categories={CATEGORIES_NAMES}
          onClick={changeCategory}
        />
      )}
    </main>
  );
}
