import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

PetsTableControls.propTypes = {
  animalFilters: PropTypes.array.isRequired,
  checkedAnimals: PropTypes.array.isRequired,
  onAnimalChecked: PropTypes.func
};

PetsTableControls.defaultProps = {
  onAnimalChecked: Function.prototype
};

function PetsTableControls({
  onAnimalChecked,
  animalFilters,
  checkedAnimals
 }) {
  return (
    <div>
      {
        animalFilters.map((animal) => {
          const isChecked = checkedAnimals.includes(animal);
          return <Checkbox
            key={animal}
            onCheck={() => onAnimalChecked(animal, isChecked)}
            label={animal}
            checked={isChecked}
          />
        })
      }
    </div>
  );
}

export default PetsTableControls

