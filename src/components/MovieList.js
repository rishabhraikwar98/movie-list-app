import React, { useEffect, useState } from "react";

export default function MovieList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "98d751f465msh569d2505c29a645p11094fjsnc23fe9b8f83f",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=mo%20of%20thr`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.d);
        setData(response.d);
      })
      .catch((err) => console.error(err));
  },[]);


  return (
    <>
      <h1 className="bg-dark text-white">MovieList</h1>
      <br></br>
      <div style={{display:"flex",flexWrap : "wrap",justifyContent:"space-around"}}>
      {data.map((item) => {
        return (
          <div className="card" style={{ width: "19rem"}}>
            <img class="card-img-top" src={item.i.imageUrl} alt="movie"></img>
            <div className="card-body">
              <h4>{item.l} ({item.y})</h4>
              <p><b>Cast: </b>{item.s}</p>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}
