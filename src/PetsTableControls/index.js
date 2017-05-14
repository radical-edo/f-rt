import React, { PropTypes } from 'react';

import CheckBoxFilters from './CheckBoxFilters';

function PetsTableControls({
  onAnimalChecked,
  animalFilters,
  checkedAnimals
 }) {
  return (
    <div>
      <CheckBoxFilters
        onAnimalChecked={onAnimalChecked}
        animalFilters={animalFilters}
        checkedAnimals={checkedAnimals}
      />
    </div>
  );
}

export default PetsTableControls

