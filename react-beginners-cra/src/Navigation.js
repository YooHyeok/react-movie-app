import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component{
  render() {
    return(
    <div className="nav">
      <Link to={`/about`}>About</Link>
      <Link to={`/ver1`}>Ver1</Link>
      <Link to={`/ver2`}>Ver2</Link>
    </div>)
  }
}