import { useState, Fragment } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [searchdata, setsearchdata] = useState("");
  const handelsearchfiled = (event) => {
    setsearchdata(event.target.value);
  };
  const formhandler = (event) => {
    event.preventDefault();
    props.getanime(searchdata);
    setsearchdata('')
  };
  

  return (
    <Fragment>
      <section className="section1">
        <header className="heading">
          <span>The</span>
          <span>Anime</span>
          <span>Database</span>
        </header>
        <div className="search">
          <form onSubmit={formhandler}>
            <input
            value={searchdata}
              className="searchfield"
              type="text"
              placeholder="search here..."
              onChange={handelsearchfiled}
            ></input>
            <button type="submit" className="searchbutton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
