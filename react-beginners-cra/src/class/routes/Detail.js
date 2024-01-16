import { Component } from "react";
import Redirect from "./Redirect";

export default class Detail extends Component {
  
  constructor(props) {
    super(props)
    console.log(props)
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
    if (this.state.location.state == null) {
      return (<Redirect path={`${process.env.PUBLIC_URL}/ver2`}/>) // 클래스형 컴포넌트에서는 redirect를 컴포넌트를 통해 거쳐 실행시킨다...
    }

    return (
    <h1>{this.state.location.state.title}</h1>
    )
}
}