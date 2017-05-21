import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

import './AnimalControl.css';

AnimalControl.propTypes = {
  animalFilters: PropTypes.array.isRequired,
  checkedAnimals: PropTypes.array.isRequired,
  onAnimalChecked: PropTypes.func
};

AnimalControl.defaultProps = {
  onAnimalChecked: Function.prototype
};

function AnimalControl({
  className,
  onAnimalChecked,
  animalFilters,
  checkedAnimals
 }) {
  return (
    <div className={"AnimalControl--container " + className}>
      {
        animalFilters.map((animal) => {
          const isChecked = checkedAnimals.includes(animal);
          return (
            <div key={animal} className="AnimalControl--checkbox-container">
              <Checkbox
                onCheck={() => onAnimalChecked(animal, isChecked)}
                label={animal}
                checked={isChecked}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default AnimalControl

