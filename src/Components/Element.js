import "./Element.css";
const Element = (props) => {
  return (
    <section className="section3">
      <a href={props.url}>
        <div className="animeelement">
          <img className="animeimage" src={props.imgurl}  alt='Anime' />
        </div>
        <span className="animetitle">{props.title}</span>
      </a>
    </section>
  );
};

export default Element;
