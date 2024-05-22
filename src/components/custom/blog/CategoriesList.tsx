import React from 'react';
import CategoryTab from './CategoryTab';

export default function CategoriesList({
  categories,
  currentParams,
}: {
  categories: { category: string }[];
  currentParams?: string;
}) {
  return (
    <ul className="flex gap-2 flex-wrap">
      {categories.map((category: { category: string }, index: number) => {
        return (
          <CategoryTab
            key={category.category}
            category={category.category}
            isCurrentCategory={
              currentParams?.toLowerCase() === category.category.toLowerCase()
            }
          />
        );
      })}
    </ul>
  );
}
