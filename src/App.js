import MovieList from "./MovieList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 class="logo">
          SII<span class="colorBlue">flix</span>
        </h1>
        <nav>
          <div class="menu-items">
            <a href="#">Home</a>
            <a href="#">Series</a>
            <a href="#">Movies</a>
          </div>
          <div class="user-account">
            <a href="#">
              <i class="uil uil-user-circle"></i>
            </a>
          </div>
        </nav>
      </header>
      <h3>Polecane</h3>
      <div>
        <MovieList />
      </div>
      <h3>Ciekawe</h3>
      <div>
        <MovieList />
      </div>
      <h3>Nowe</h3>
      <div>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
