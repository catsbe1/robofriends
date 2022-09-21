import React, { useState } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import "./SearchBox.css";

const SearchBox = () => {
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const searchRobot = (event) => {
    setFilteredRobots(
      robots.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <form>
        <input
          className="pa3 ba b--green bg-lightest-blue input"
          type="search"
          placeholder="Search Robots"
          onChange={searchRobot}
        />
      </form>
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default SearchBox;
