import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Programs.css";

interface Serie {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
}

function Programs() {
  const loaderData = useLoaderData() as Serie[];
  const [series] = useState(loaderData);

  return (
    <div>
      {series.map((serie) => (
        <div key={serie.id} className="programs">
          <h2>{serie.title}</h2>
          <p>{serie.synopsis}</p>
          <img src={serie.poster} alt={serie.title} />
        </div>
      ))}
    </div>
  );
}

export default Programs;
