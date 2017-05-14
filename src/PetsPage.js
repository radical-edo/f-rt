import React, { Component } from 'react';

import { priceRange, animals, petService } from './service';
import PetsTable from './PetsTable';
import PetsTableControls from './PetsTableControls';

class PetsPage extends Component {
  state = {
    currentPriceRange: [priceRange.min, priceRange.max],
    checkedAnimals: [],
    pets: []
  };

  componentDidMount() {
    petService.fetch().then(pets => this.setState({ pets }));
  }

  render() {
    const checkedPets = this.getCheckedPets(this.state);
    const pets = this.getPetsInPriceRange(checkedPets, this.state.currentPriceRange);
    return (
      <main>
        <PetsTableControls
          currentPriceRange={this.state.currentPriceRange}
          priceRange={priceRange}
          onPriceChanged={(...args) => this.onPriceChanged(...args)}
          onAnimalChecked={(animal, isChecked) => this.onAnimalChecked(animal, isChecked)}
          animalFilters={animals}
          checkedAnimals={this.state.checkedAnimals}
        />
        <PetsTable pets={pets} />
      </main>
    );
  }

  onPriceChanged(currentPriceRange) {
    this.setState({ currentPriceRange }); 
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

  getPetsInPriceRange(pets, currentPriceRange) {
    const [min, max] = currentPriceRange;
    return pets.filter(pet => pet.price >= min && pet.price <= max);
  }

  getCheckedPets({ checkedAnimals, pets }) {
    if (!!checkedAnimals.length) {
      return pets.filter(pet => checkedAnimals.includes(pet.animal));
    } else {
      return pets;
    }
  }

}

export default PetsPage;

