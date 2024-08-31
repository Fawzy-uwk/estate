// ListPage.js
import { useState } from "react";
import Card from "../Components/Card";
import Filter from "../Components/Filter";
import Map from "../Components/Map";
import { singlePostData } from "../Lib/Dummy";

function ListPage() {
  const [filteredData, setFilteredData] = useState(singlePostData);

  const handleFormSubmit = (formData) => {
    const filteredResults = filterData(singlePostData, formData);
    setFilteredData(filteredResults);
  };

  return (
    <div className="listPage ">
      <div className="listContainer">
        <div className="wrapper">
          <Filter onSubmit={handleFormSubmit} />
          {filteredData.length === 0 ? (
            <div className="w-full text-center">No Posts Found 😢 </div>
          ) : (
            filteredData.map((item) => <Card key={item.id} item={item} />)
          )}
        </div>
      </div>
      <div className="mapContainer p-2">
        <Map data={filteredData} />
      </div>
    </div>
  );
}

function filterData(data, formData) {
  const { city, property, price, minPrice, maxPrice, bedroom } = formData;
  let filteredData = data;

  if (city) {
    filteredData = filteredData.filter((item) =>
      item.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  if (property) {
    filteredData = filteredData.filter(
      (item) => item.propertyType.toLowerCase() === property.toLowerCase()
    );
  }

  if (price === "asc") {
    filteredData = filteredData.sort((a, b) => a.price - b.price);
  } else if (price === "desc") {
    filteredData = filteredData.sort((a, b) => b.price - a.price);
  }

  if (minPrice) {
    filteredData = filteredData.filter(
      (item) => item.price >= parseInt(minPrice)
    );
  }

  if (maxPrice) {
    filteredData = filteredData.filter(
      (item) => item.price <= parseInt(maxPrice)
    );
  }

  if (bedroom) {
    filteredData = filteredData.filter(
      (item) => item.bedRooms === parseInt(bedroom)
    );
  }

  return filteredData;
}

export default ListPage;
