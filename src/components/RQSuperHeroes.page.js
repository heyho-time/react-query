import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  // const results = useQuery("super-heroes", () => { 밑에처럼 destructure
  const { isLoading, data } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });

  if (isLoading) {
    return <h2>...loading</h2>;
  }

  return (
    <>
      <div>RQSuperheroes</div>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
