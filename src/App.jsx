import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";
// import ".path-to-css.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <>
    {featPupId && (
      <div className="featPupContainer">
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
          
        </ul>
      </div>
    ) }
    <div >
      {puppies.map((puppy) => (
        <p className="pupContainer"
          key={puppy.id}
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
        >
          {puppy.name}
        </p>
      ))}
      </div>
    </>
  );
}

export default App;
