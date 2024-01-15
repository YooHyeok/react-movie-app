import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import About from './About';

export default function Wrapper(props) {
  const param = useParams();
  return React.cloneElement(props.element, {param})
}
