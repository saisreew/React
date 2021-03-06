import React, { Component } from "react";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Pagination from "./components/pagination";
import Listgroup from "./components/listgroup";
import _ from "lodash";
class App extends Component {
  state = {
    movies: [
      {
        img: "http://picsum.photos/500",
        _id: "5c15",
        title: "Terminator",
        genre: "Action",
        numberInStock: 6,
        dailyRentalRate: 2.5
      },
      {
        img: "http://picsum.photos/501",
        _id: "5a16",
        title: "Die Hard",
        genre: "Action",
        numberInStock: 5,
        dailyRentalRate: 4
      },
      {
        img: "http://picsum.photos/503",
        _id: "5t17",
        title: "Get Out",
        genre: "Thriller",
        numberInStock: 8,
        dailyRentalRate: 3
      },
      {
        img: "http://picsum.photos/504",
        _id: "6c18",
        title: "Trip to Italy",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        img: "http://picsum.photos/505",
        _id: "5d19",
        title: "Airplane",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        img: "http://picsum.photos/506",
        _id: "5a20",
        title: "Jumanji",
        genre: "Animation",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        img: "http://picsum.photos/507",
        _id: "6b23",
        title: "Toy Story",
        genre: "Thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5
      },
      {
        img: "http://picsum.photos/508",
        _id: "6b22",
        title: "The Sixth Sense",
        genre: "Thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5
      },
      {
        img: "http://picsum.photos/509",
        _id: "5b21",
        title: "The Avengers",
        genre: "Action",
        numberInStock: 7,
        dailyRentalRate: 3.5
      }
    ],
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Thriller" },
      { id: 3, name: "Comedy" },
      { id: 4, name: "Animation" }
    ],
    selectedGenre: 1,
    pageSize: 1,
    selectedPage: 1
  };
  handleSelectedGenre = genre => {
    console.log(genre);
    this.setState({ selectedGenre: genre.id });
  };
  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };
  render() {
    const { genres } = this.state;
    const { selectedGenre } = this.state;
    //filtering movies based on genre
    const genre = genres.filter(genre => genre.id === selectedGenre);
    console.log(genre);
    const filteredMovies = this.state.movies.filter(
      movie => movie.genre === genre[0].name
    );
    console.log("movies", filteredMovies);
    const paginatedMovies = this.paginate(
      filteredMovies,
      this.state.selectedPage,
      this.state.pageSize
    );
    console.log(paginatedMovies);

    return (
      <div>
        <NavBar />

        <div className="row">
          <div className="col-md-3">
            <Listgroup
              genres={this.state.genres}
              selectedGenre={this.state.selectedGenre}
              handleSelectedGenre={this.handleSelectedGenre}
            />
          </div>
          <div className="col-md-9">
            <Movies movies={paginatedMovies} />
          </div>
        </div>
        <Pagination
          pageSize={this.state.pageSize}
          totalMovies={filteredMovies.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}

export default App;
