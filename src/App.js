import "./App.css";

import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <footer>
        <p>
          <a href="https://github.com/catsbe1">Open-source</a> website coded by
          Ana Ribeiro
        </p>
      </footer>
    </div>
  );
};

export default App;
