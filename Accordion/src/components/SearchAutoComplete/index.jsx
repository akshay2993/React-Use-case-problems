import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import './style.css'

const SearchAutocomplete = () => {
  const [searchParam, setSearchParam] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    console.log(query);
    setSearchParam(query);
    if (query.length > 1) {
      const filteredResults =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : null;
      console.log(filteredResults);
      setFilteredUsers(filteredResults);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
    // console.log(filteredUsers)
  };

  const handleClick = (e) => {
    const selected = e.target.innerText;
    setSearchParam(selected);
    setShowDropdown(false);
    setFilteredUsers([]);
  };

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  console.log(users);

  if (loading) {
    return <h2>Loading. Please Wait!</h2>;
  }

  if (error) {
    return <h2>Error Occurred. {error}</h2>;
  }
  return (
    <>
      <div>
        <input className="name-input" type="text" value={searchParam} onChange={handleChange} />
      </div>
      {showDropdown && (
        <div className="suggestions">
          <Suggestions list={filteredUsers} onClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default SearchAutocomplete;
