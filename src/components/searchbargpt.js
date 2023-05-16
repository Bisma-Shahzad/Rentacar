import { useState } from "react";

function SearchBargpt(props) {
  const { label, onSearch } = props;
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder={label ?? "Search..."}
        style={{ width: "600px" }}
      />
    </div>
  );
}

export default SearchBargpt;
