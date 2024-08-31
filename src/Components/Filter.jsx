// Filter.js
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

/*eslint-disable react/prop-types*/

function Filter({ onSubmit }) {
  const [formData, setFormData] = useState({
    city: "",
    property: "",
    price: "",
    minPrice: "",
    maxPrice: "",
    bedroom: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="filter">
      <h1>
        Latest offers in <b>Egypt</b>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
              className="outline-none"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <label htmlFor="property">Property</label>
            <select
              name="property"
              id="property"
              value={formData.property}
              onChange={handleChange}
            >
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="penthouse">PentHouse</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="price">Price</label>
            <select
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
            >
              <option value="">any</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="any"
              value={formData.minPrice}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="any"
              value={formData.maxPrice}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="number"
              id="bedroom"
              name="bedroom"
              placeholder="any"
              value={formData.bedroom}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-20 rounded-md flex items-center justify-center "
            type="submit"
          >
            <FaSearch size={24} color="white" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
