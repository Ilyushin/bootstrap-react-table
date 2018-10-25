import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render () {
    return (
      <thead>
        <tr>
          {this.props.columns.map((item) => (<th key={item.id}>{item.name}</th>))}
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
