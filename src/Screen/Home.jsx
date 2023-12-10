import Navbar from "../Navbar";
import Card from "../Card";

import { useEffect, useState } from "react";
import "./home.css";


const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch]=useState("");

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:4000/api/data", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let response2 = await fetch("http://localhost:4000/api/data2", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      response = await response.json();
      response2 = await response2.json();

      console.log("Response from API 1:", response);
      console.log("Response from API 2:", response2);

      setFoodItem(response);
      setFoodCat(response2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
   
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid"
              alt="First slide"
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              style={{ height: "500px", width: "100%" ,objectFit:"cover"}}
            />
              </div>
              <div className="carousel-item ">
            <img
              className="d-block img-fluid"
              alt="First slide"
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              style={{ height: "500px", width: "100%"  ,objectFit:"cover"}}
            />
              </div>
              <div className="carousel-item ">
            <img
             className="d-block img-fluid"
              alt="First slide"
              src="https://plus.unsplash.com/premium_photo-1671394138398-fe1ce5e5b03b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ height: "500px", width: "100%" ,objectFit:"cover" }}
            />
              </div>
            </div>
            <div className="carousel-caption justify-content-center" style={{ zIndex: 10 }}>
              <div className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{width:"90%",borderRadius:"30px"}}
                  value={search}
                  onChange={(e)=>{
                    setSearch(e.target.value)
                  }}
                />
               
       

        </div>
  
      </div>
      </div>
      <div id="cards" className="container">
        {foodCat.map((data) => (
          <div className="mb-3">
            <div className="fs-4 m-3">{data.CategoryName}</div>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {foodItem
          .filter(
            (data1) =>
              data.CategoryName === data1.CategoryName &&
              data1.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((filteredData) => (
          
            <div key={filteredData.id} className="col" >
              <Card 
                id={filteredData.id}
                imgs={filteredData.img}
                name={filteredData.name}
                description={filteredData.description}
                options={filteredData.options}
                Category={filteredData.CategoryName}
              />
            </div>
            
          ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default Home;
