import React, { Component } from 'react';

import { priceRange, animals, petService } from './service';
import PetsTable from './PetsTable';
import PetsTableControls from './PetsTableControls';

const SORTING_WIEGHTS = [-1, 0, 1];

class PetsPage extends Component {
  state = {
    sortBy: { rating: { order: 0, index: 1 } },
    currentPriceRange: [priceRange.min, priceRange.max],
    checkedAnimals: [],
    pets: []
  };

  componentDidMount() {
    petService.fetch().then(pets => this.setState({ pets }));
  }

  render() {
    const checkedPets = this.getCheckedPets(this.state);
    const filteredPets = this.getPetsInPriceRange(checkedPets, this.state.currentPriceRange);
    const pets = [...filteredPets].sort((petA, petB) => this.state.sortBy.rating.order*(petA.rating - petB.rating));
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
        <PetsTable
          onTableHeaderClick={(...args) => this.onTableHeaderClick(...args)}
          sortBy={this.state.sortBy}
          pets={pets}
        />
      </main>
    );
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

  onTableHeaderClick(sortProp) {
    const sortObj = this.state.sortBy[sortProp];
    sortObj.index = (sortObj.index + 1) % SORTING_WIEGHTS.length
    sortObj.order = SORTING_WIEGHTS[sortObj.index];
    const sortBy = Object.assign({}, this.state.sortBy, { [sortProp]: sortObj });
    this.setState({ sortBy });
  }
}

export default PetsPage;

