import React, { PropTypes } from 'react';

import PriceControl from './PriceControl';
import AnimalControl from './AnimalControl';

PetsTableControls.propTypes = {
  currentPriceRange: PropTypes.array.isRequired,
  priceRange: PropTypes.object.isRequired,
  onAfterPriceChanged: PropTypes.func,
  onPriceChanged: PropTypes.func
};

function PetsTableControls({
  onAfterPriceChanged,
  currentPriceRange,
  priceRange,
  onPriceChanged,
  onAnimalChecked,
  animalFilters,
  checkedAnimals
 }) {
  return (
    <div>
      <PriceControl
        onAfterChange={onAfterPriceChanged}
        value={currentPriceRange}
        onChange={onPriceChanged}
        min={priceRange.min}
        max={priceRange.max}
      />
      <AnimalControl
        onAnimalChecked={onAnimalChecked}
        animalFilters={animalFilters}
        checkedAnimals={checkedAnimals}
      />
    </div>
  );
}

export default PetsTableControls

