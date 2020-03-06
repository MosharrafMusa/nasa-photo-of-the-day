import React, { useState } from "react";
import "./App.css";
import CardBuilder from "./Components/CardBuilder";
import Date from "./Components/Date";
import Navigation from "./Components/Navigation";

function App(props) {
  let today = new window.Date();
  let dd = String(today.getDate());
  let mm = String(today.getMonth() + 1);
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  const [date, setDate] = useState(today);
  const [date1, setDate1] = useState();

  function handleDate(e) {
    setDate1(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setDate(date1);
    console.log(date);
  }

  return (
    <div className="App">
      <Navigation />
      <CardBuilder date={date} />

      <div className="Search">
        <Date handleDate={handleDate} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
export default App;
