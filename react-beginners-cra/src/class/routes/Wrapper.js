import React from 'react';
import { useParams } from 'react-router-dom';
import About from './About';

export default function Wrapper(props) {
  const { id } = useParams();
  return React.cloneElement(props.element, {id})
}
