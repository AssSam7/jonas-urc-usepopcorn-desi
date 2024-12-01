import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="red" size={36} onSetRating={setMovieRating} />
      <p>This movie was rating {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]} />
    <StarRating size={24} color="blue" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
