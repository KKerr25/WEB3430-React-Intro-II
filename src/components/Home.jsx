//import "./Home.css";
import "./Home.css";
import Greeting from "./Prop.jsx";

function Home({ color, setColor }) {
  return (
    <div className="home">
      <Greeting place="World" />

      <h1>My favorite color is {color}!</h1>
      <div className="Buttons">
        <button onClick={() => setColor("blue")} className="btn">
          Change to Blue
        </button>
        <button onClick={() => setColor("red")} className="btn">
          Change to Red
        </button>
      </div>
    </div>
  );
}

export default Home;
