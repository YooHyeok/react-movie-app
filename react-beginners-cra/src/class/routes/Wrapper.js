import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function Wrapper(props) {
  const param = useParams();
  const location = useLocation();
  return React.cloneElement(props.element, {param, location})
}
