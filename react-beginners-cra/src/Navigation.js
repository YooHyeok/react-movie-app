import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component{
  render() {
    return(
    <div className="nav">
      <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
      <Link to={`${process.env.PUBLIC_URL}/ver1`}>Ver1</Link>
      <Link to={`${process.env.PUBLIC_URL}/ver2`}>Ver2</Link>
    </div>)
  }
}