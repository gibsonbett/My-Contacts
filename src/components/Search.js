import React from "react";

function Search(){
    function handleSearch(e){
        setSearch(e.target.value)
    }
return (
    <div className="">
      <input
        type="text"
        placeholder="Search Contact"
        onChange={handleSearch}
        
      />
      <i className=""></i>
    </div>
)

} export default Search