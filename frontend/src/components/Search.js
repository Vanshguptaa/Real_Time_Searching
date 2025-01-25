import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [query, setQuery] = useState("");  // Track the search query
    const [results, setResults] = useState([]);  // Store the search results

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const searchProducts = async () => {
            if (query.length >= 3) {  // Only search when the query is 3 or more characters
                try {
                    const response = await axios.get(`http://localhost:5000/api/products/search?query=${query}`);
                    setResults(response.data);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                }
            } else {
                setResults([]);
            }
        };

        // Trigger search when the query changes
        searchProducts();
    }, [query]); // useEffect will trigger when the query changes

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search for products..."
            />
            <div>
                <ul>
                    {results.map((product) => (
                        <li key={product._id}>
                            {product.title} - ${product.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Search;
