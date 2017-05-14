import React, { Component } from 'react';

import { animals, petService } from './service';
import PetsTable from './PetsTable';
import PetsTableControls from './PetsTableControls';

class PetsPage extends Component {
  state = {
    checkedAnimals: [],
    pets: []
  };

  componentDidMount() {
    petService.fetch().then(pets => this.setState({ pets }));
  }

  render() {
    return (
      <main>
        <PetsTableControls
          onAnimalChecked={(animal, isChecked) => this.onAnimalChecked(animal, isChecked)}
          animalFilters={animals}
          checkedAnimals={this.state.checkedAnimals}
        />
        <PetsTable pets={this.getPets(this.state)} />
      </main>
    );
  }

  onAnimalChecked(animal, isChecked) {
    let checkedAnimals;
    if (isChecked) {
      checkedAnimals = this.state.checkedAnimals.filter(a => a !== animal);
    } else {
      checkedAnimals = this.state.checkedAnimals.concat(animal);
    }
    this.setState({ checkedAnimals });
  }

  getPets({ checkedAnimals, pets }) {
    if (!!checkedAnimals.length) {
      return pets.filter(pet => checkedAnimals.includes(pet.animal));
    } else {
      return pets;
    }
  }

}

export default PetsPage;

