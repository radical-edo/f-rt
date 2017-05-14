import React from 'react';

import PriceControl from './PriceControl';
import AnimalControl from './AnimalControl';

function PetsTableControls({
  onAnimalChecked,
  animalFilters,
  checkedAnimals
 }) {
  return (
    <div>
      <PriceControl />
      <AnimalControl
        onAnimalChecked={onAnimalChecked}
        animalFilters={animalFilters}
        checkedAnimals={checkedAnimals}
      />
    </div>
  );
}

export default PetsTableControls

