import {Component} from "react"
import {PropTypes} from "prop-types"

export default class Movie extends Component{

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {

    return (
      <h4>{this.props.title}</h4>
    );
  }
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}