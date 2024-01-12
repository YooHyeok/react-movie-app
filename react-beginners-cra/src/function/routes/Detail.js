import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Detail() {
  /**
   * useParams()
   * Rotue에서 받는 :변수명과 일치해야한다.
   * {id:value} 형태와 같이 객체로 넘어오기 때문에 구조분해할당 활용 가능
   * ex) /movie/:id/:namme - const {id, name} = useParams()
   **/

  const {id} = useParams(); // 구조분해할당 {id : value}로 넘어온다. 
  const getMovieApi = async ()=>{
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json()
      console.log(json.data.movie)
  }
  useEffect(()=>{
    getMovieApi();
  },[])
  return <h1>Detail</h1>
}