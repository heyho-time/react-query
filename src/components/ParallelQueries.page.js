import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const fetchFriends = (heroId) => {
  return axios.get(`http://localhost:4000/friends`);
};

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <h2>ParallelQueriesPage</h2>;
};

//destructure해서 사용해야 되는데 중복되니까 이름을 지을 수 있다.
