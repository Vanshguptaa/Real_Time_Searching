// assignment_app/src/Search.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  // Fetch data from the backend (MongoDB)
  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(err => console.log(err));
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Filter data based on search query
  const filteredData = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={handleSearch} 
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
