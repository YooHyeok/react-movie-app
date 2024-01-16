import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';

export default function Redirect({path}) {
  const navigate = useNavigate();
  console.log(path)
  useEffect(()=>{
    navigate(path)
  },[])
}