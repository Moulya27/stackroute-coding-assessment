import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
function Products() {
  const [data, setData] = useState([]);

  const api = async () => {
    const result = await axios.get("/data.json");
    //console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <div className="product">
      {data?.map((item, i) => {
        return (
          <div class="card" key={item.id}>
            <img
              class="card-img-top"
              src={item.Image.path}
              alt={item.Image.alt}
            />
            <p class="card-title">{item.title}</p>
            <a href="#" class="btn btn-primary">
              See More
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
