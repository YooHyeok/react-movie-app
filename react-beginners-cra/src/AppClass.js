import {Component} from 'react';
import axios from "axios"
import ClassComponent from './class/component/example/ClassComponent';
import Movie from './class/component/movie/Movie';
// https://yts-proxy.now.sh/list_movies.json

/**
 * React Component를 상속받아 App클래스를 확장함으로서
 * React Component의 State와 Render 등 많은 기능들을 사용할 수 있게 된다.
 * Class컴포넌트는 React Component 의 render메소드를 통해 렌더링한다.
 */
export default class AppClass extends Component{
  
  state = {
    isLoading: true,
    movies: []
  }

  getMovieFetch = async () => {
    const response = await((await fetch("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")).json())
    console.log(response.data.movies)
    // this.setState({movies: response.data.movies})

  }

  getMovieAxios = async () => {
  // const response = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  // console.log(response)

  /**
   * {data} 구조 분해 할당을 통해 data 객체를 가져온다.
   * 이때, data라는 객체의 이름을 다른 이름으로 사용하기 위해서는
   * {data: 지정할변수명} 으로 지정한다.
   */
  //  const {data: response} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  //  console.log(response.data.movies)
  //  const movies = response.data.movies
  // this.setState({movies: response.data.movies, isLoading: false })
  
  /**
   * 구조분해할당 문법으로 구조를 분해하여 저장
   * 중첩된 객체로 부터 최종적인 movies라는 변수에 해당하는 값을 추출하는 구조
   */
  const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  /**
   * ES6 단축속성명 문법
   * object에 저장할 데이터가 담긴 외부 변수명과 object에 지정할 리터럴 속성명이 일치하면 속성명만 작성한다.
   * 외부 변수 데이터를 리터럴에 간편하게 위임하는 느낌의 방식이다.
   * {변수명 : 변수명} => {변수명}
   */
  this.setState({movies, isLoading: false })

  }

  componentDidMount() {
    this.getMovieFetch();
    this.getMovieAxios();
    console.log(this.state)
  }

  /**
   * Class형 컴포넌트에서 특정 컴포넌트나 HTML 등의 JSX를 렌더링 하기 위한 메소드
   */
  render() {
    const {isLoading, movies} = this.state
    return (
      <div>
         {/* <ClassComponent/> */}
          {isLoading ? "Loading" : movies.map((movie)=>
            <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year}
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
            />
          )}
      </div>
    )
  }
}