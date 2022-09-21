import React, { useState } from "react";
import CardList from "./CardList";
import { robots } from "./robots";

const SearchBox = () => {
  const [searchfield, setSearchField] = useState("");
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const searchRobot = (event) => {
    setSearchField(event.target.value);
    setFilteredRobots(
      robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
    );
  };

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <form>
        <input
          className="pa3 ba b--green bg-lightest-blue"
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
