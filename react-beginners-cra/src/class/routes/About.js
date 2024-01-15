import { Component } from "react";

export default class About extends Component {

  constructor(props) {
    super(props)
    this.state = {param:props.param, location: props.location}

  }
  getMovieApi = async (id)=>{
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json()
      console.log(json.data.movie)
  }
  componentDidMount() {
    this.getMovieApi(this.state.param.id)
  }

  render() {
      return (<h1>Detail</h1>)
  }
}