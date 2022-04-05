import { Fragment, useState, useEffect } from "react";
import "./Display.css";
import Element from "./Element";
const Display = (props) => {
  const [dataanime, setdata] = useState([]);
  useEffect(() => {
    getanime();
  }, []);
  async function getanime() {
    const response = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    );
    const data = await response.json();
    const reqdata = data.top.map((item) => {
      return {
        key: item.mal_id,
        imgurl: item.image_url,
        title: item.title,
        url: item.url,
      };
    });
    const animedata = reqdata.slice(0, 40);

    setdata(animedata);
    console.log(animedata);
  }

  async function getdata() {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${props.animename}\&page=1`
    );
    const data = await response.json();
    console.log(data);
    const reqdata = data.results.map((item) => {
      return {
        key: item.mal_id,
        imgurl: item.image_url,
        title: item.title,
        url: item.url,
      };
    });
    const animedata = reqdata.slice(0, 25);
    setdata(animedata);
  }
  if(props.animename.trim() !== ' '){
    getdata();
  }

  return (
    <Fragment>
      <section className="section2">
        <div className="display2">
          {/* <button onClick={getdata}>clcik</button> */}
          {dataanime.map((item) => {
            return (
              <Element
                key={item.key}
                imgurl={item.imgurl}
                title={item.title}
                url={item.url}
              />
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Display;
