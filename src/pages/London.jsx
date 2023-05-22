import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function London() {
  const [spots, setSpots] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/spots");
      if (response.status === 200) {
        const londonSpots = response.data.filter((spot) => spot.city === "London");
        setSpots(londonSpots);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {spots.length > 0 ? (
        <>
          {spots.map((spot) => (
            <div key={spot._id}>
              <Link to={`/spots/london/${spot._id}`}>
                <h2>{spot.title}</h2>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      )}
    </>
  );
}

export default London;
