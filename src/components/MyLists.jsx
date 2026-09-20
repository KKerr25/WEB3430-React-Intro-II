import "./mylists.css";

function MyList() {
  const sports = ["Soccer", "Basketball", "Baseball", "Football"];
  return (
    <>
      <h3 className="header">My Favorite Sports</h3>
      <ul className="list">
        {sports.map((sport) => (
          <li className="list-item">{sport}</li>
        ))}
      </ul>
    </>
  );
}

function List2() {
  const hobbies = ["Hunting", "Fishing", "Camping"];

  return (
    <>
      <h3 className="header">My Favorite Hobbies</h3>
      <ul className="list">
        {hobbies.map((hobby) => (
          <li className="list-item">{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export { MyList, List2 };
