import "./App.css";
import { Fragment, useState } from "react";
import Header from "./Components/Header";
import Display from "./Components/Display";

function App() {
  const [searchfield, setsearchfield] = useState("");

  const getanime = (data) => {
    setsearchfield(data);
  };
  console.log(searchfield);
  return (
    <Fragment>
      <Header getanime={getanime} />
      <Display  animename={searchfield} />
    </Fragment>
  );
}

export default App;
