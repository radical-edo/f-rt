import React, { PropTypes } from 'react';

import './index.css';
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
  const [minPrice, maxPrice] = currentPriceRange;
  return (
    <div className="PetsTableControls--container">
      <header className="PetsTableControls--container__header">
        Available Pet Filters:
      </header>
      <div className="PetsTableControls--container__filters">
        <section className="PetsTableControls--filters__section">
          <header className="PetsTableControls--section__header">
            Pets Price range: ({minPrice} - {maxPrice})$
          </header>
          <PriceControl
            className="PetsTableControls--price-control"
            onAfterChange={onAfterPriceChanged}
            value={currentPriceRange}
            onChange={onPriceChanged}
            min={priceRange.min}
            max={priceRange.max}
          />
        </section>
        <section className="PetsTableControls--filters__section">
          <header className="PetsTableControls--section__header">
            Pet Types:
          </header>
          <AnimalControl
            className="PetsTableControls--animal-control"
            onAnimalChecked={onAnimalChecked}
            animalFilters={animalFilters}
            checkedAnimals={checkedAnimals}
          />
        </section>
      </div>
    </div>
  );
}

export default PetsTableControls

