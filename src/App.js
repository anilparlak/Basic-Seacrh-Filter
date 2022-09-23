import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

function App() {
  console.log("start")
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    console.log("useEffect")
    const getMonsters = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setSearch(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMonsters();
  }, []);

  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setFilter(() => {
      return searchField;
    });
  }

  const filteredMonsters = search.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(filter);
  });

  return (
    <div className="App">
      {console.log("return")}
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
