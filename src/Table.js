import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { petService } from './service';

class PetsTable extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    petService.fetch().then(pets => this.setState({ pets }));
  }

  render() {
    const { pets } = this.state;
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>id</TableHeaderColumn>
            <TableHeaderColumn>Animal</TableHeaderColumn>
            <TableHeaderColumn>Colour</TableHeaderColumn>
            <TableHeaderColumn>Pattern</TableHeaderColumn>
            <TableHeaderColumn>Rating</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            pets.map((pet, id) => {
              return (
                <TableRow key={id}>
                  <TableRowColumn>{ id }</TableRowColumn>
                  <TableRowColumn>{ pet.animal }</TableRowColumn>
                  <TableRowColumn>{ pet.colour }</TableRowColumn>
                  <TableRowColumn>{ pet.pattern }</TableRowColumn>
                  <TableRowColumn>{ pet.rating }</TableRowColumn>
                  <TableRowColumn>{ pet.price }</TableRowColumn>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

export default PetsTable

