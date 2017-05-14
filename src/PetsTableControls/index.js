import React from 'react';

import AnimalControl from './AnimalControl';

function PetsTableControls({
  onAnimalChecked,
  animalFilters,
  checkedAnimals
 }) {
  return (
    <div>
      <AnimalControl
        onAnimalChecked={onAnimalChecked}
        animalFilters={animalFilters}
        checkedAnimals={checkedAnimals}
      />
    </div>
  );
}

export default PetsTableControls

