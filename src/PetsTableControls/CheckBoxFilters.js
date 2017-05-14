import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

CheckBoxFilters.propTypes = {
  animalFilters: PropTypes.array.isRequired,
  checkedAnimals: PropTypes.array.isRequired,
  onAnimalChecked: PropTypes.func
};

CheckBoxFilters.defaultProps = {
  onAnimalChecked: Function.prototype
};

function CheckBoxFilters({
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

export default CheckBoxFilters
