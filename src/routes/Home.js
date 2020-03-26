import React from 'react';
import axios from 'axios'; //api 가져오려고 씀!
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {       
    isLoading: true,
    movies: []
  };

  getMovies = async () => { //async await axios로 가져오는 시간이 걸리기 때문에 기다려야한다
    const {
      data:{
        data: { movies } 
      } // api에서 가져온 data안의 data 안의 movies. es6스크립트
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        //await는 axios가 데이터를 가져오는 동안 기다리게 함.
        //async와 같이 써야함.

    this.setState({movies:movies, isLoading: false }) // movies:movies이지만 자바스크립트 새버전으로 간략하게 생략가능
                     // state에 있는 movies에 axios에서 가져온 movies를 넣음!
   } 

   //compenent가 마운트 한뒤에 바로 실행됨
  componentDidMount(){
    this.getMovies();
  }
 
  //className은 위의 앱 컴포넌트의 class와 자바스크립트 혼동때문에
  //className으로 고쳤음.

  render() {
    const { isLoading, movies } = this.state;
   return (
      <section className="container"> 
     {isLoading  ? (
        <div className="loader">
        <span className="loader_text">Loading..</span>
        </div>
        ) : (
        <div className="movies">
          {
            movies.map( movie => (
              <Movie
               key={movie.id}
               id={movie.id}
               title={movie.title}
               synopsis={movie.summary}
               poster={movie.medium_cover_image}
               genres={movie.genres}
             />
            ))}
        </div>
      )}
      </section>
   );
  }
}


export default Home;
