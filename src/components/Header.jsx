import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor () {
    super();

    this.state = {
      columns: [],
    };
  }

  render () {
    return (
      <thead>
        <tr>
          {this.state.columns.map((item) => (<th key={item.id}>{item.name}</th>))}
        </tr>
      </thead>
    );
  }
}

Header.propTypes = {
  columns: PropTypes.array,
};

Header.displayName = 'Header of Bootstrap 4 table';

export default Header;
