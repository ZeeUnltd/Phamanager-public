import { Icon } from "@iconify/react";
import { useState } from "react";

import classes from "./SearchBox.module.scss";

interface props {
  onSearch: Function
}

function SearchBox(props: props) {
  const [search, setSearch] = useState("")
  const handleSearch = (e: React.MouseEvent| React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    props.onSearch(search)
  }
  return (
      <form className={classes.searchBox} onSubmit={handleSearch}>
        <input
          type="search"
          placeholder={"Search items"}
          name="search"
          className={classes.searchBox_input}
          onChange={(e)=> setSearch(e.target.value)}
        />
        <Icon
          icon="fluent:search-28-filled"
          width="30px"
          style={{ fontWeight: "300" }}
          onClick={handleSearch}
        />
      </form>
  );
}

export default SearchBox;
