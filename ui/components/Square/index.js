import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Styles from './styles';

function Square(props) {
  const { value, onClick } = props;
  return (
    <Styles.Square>
      <Button className="square" onClick={onClick}>
        {value}
      </Button>
    </Styles.Square>
  );
}

Square.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
};

export default Square;
