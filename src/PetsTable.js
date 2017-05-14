import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

PetsTable.propTypes = {
  pets: PropTypes.array.isRequired
};

function PetsTable({ pets }) {
  return (
    <Table selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>id</TableHeaderColumn>
          <TableHeaderColumn>Animal</TableHeaderColumn>
          <TableHeaderColumn>Colour</TableHeaderColumn>
          <TableHeaderColumn>Pattern</TableHeaderColumn>
          <TableHeaderColumn>Rating</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
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

export default PetsTable

