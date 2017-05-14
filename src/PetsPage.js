import React, { Component } from 'react';

import { petService } from './service';
import PetsTable from './PetsTable';

class PetsPage extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    petService.fetch().then(pets => this.setState({ pets }));
  }

  render() {
    return (
      <main>
        <PetsTable pets={this.state.pets} />
      </main>
    );
  }

}

export default PetsPage;

