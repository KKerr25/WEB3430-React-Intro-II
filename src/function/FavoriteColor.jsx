import "./FavoriteColor.css";

function FavoriteColor({ color, setColor }) {
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")} className="btn btn-primary">
        Change to Blue
      </button>
      <button onClick={() => setColor("red")} className="btn btn-secondary">
        Change to Red
      </button>
    </>
  );
}

export default FavoriteColor;
