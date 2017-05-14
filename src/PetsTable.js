import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import './PetsTable.css';

PetsTable.propTypes = {
  sortBy: PropTypes.object,
  onTableHeaderClick: PropTypes.func,
  pets: PropTypes.array.isRequired
};

PetsTable.defaultProps = {
  sortBy: { rating:  {} },
  onTableHeaderClick: Function.prototype
};

const CLICKABLE_HEADERS_MAP = {
  5: 'rating',
  6: 'price'
};

function handleTableHeaderRowClick(onTableHeaderClick) {
  return function onTableHeaderRowClick(_ev, row, col) {
    const headerName = CLICKABLE_HEADERS_MAP[col];
    if (headerName) {
      onTableHeaderClick(headerName);
    }
  }
}

function PetsTable({ sortBy: { rating }, onTableHeaderClick, pets }) {
  return (
    <Table selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow
          onCellClick={handleTableHeaderRowClick(onTableHeaderClick)}
        >
          <TableHeaderColumn>id</TableHeaderColumn>
          <TableHeaderColumn>Animal</TableHeaderColumn>
          <TableHeaderColumn>Colour</TableHeaderColumn>
          <TableHeaderColumn>Pattern</TableHeaderColumn>
          <TableHeaderColumn className="PetsTable--table-header">
            Rating
            <span className="PetsTable--sort-symbol-container">
              { rating.order >= 0 ? <i className="fa fa-caret-up"/> : null }
              { rating.order <= 0 ? <i className="fa fa-caret-down"/> : null }
            </span>
          </TableHeaderColumn>
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

