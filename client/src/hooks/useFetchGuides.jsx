import { useEffect, useState } from "react";
import axios from "axios";

const useFetchGuides = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const { data: guides } = await axios.get(
          `http://localhost:5000/guides`
        );
        setGuides(guides);
      } catch {
        console.error("Error fetching guides");
      }
    };

    fetchGuides();
  }, []);

  return guides;
};

export default useFetchGuides;
