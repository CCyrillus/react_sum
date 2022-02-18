import { PropTypes } from 'prop-types';
import React from 'react';
import './Sum.css';

export function Sum(props) {
  const { a, b } = props;

  return <p>{`Sum of ${props.a} and ${props.b} is ${a + b}`}</p>;
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
