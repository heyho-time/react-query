import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";

export const MutationPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching 🥰🥰 ", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error 🥰🥰", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  const { mutate: addHero, data: res } = useAddSuperHeroData();
  //   console.log(res, "<<<");
  const handleAddHeroClick = () => {
    // console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <h2>...loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Mutation page</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={alterEgo}
        onChange={(e) => setAlterEgo(e.target.value)}
      />
      <div>
        <button onClick={handleAddHeroClick}> Add Hero</button>
      </div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={refetch}> Fetch heroes</button>
      </div>

      <br />
      {data?.data.map((hero) => {
        return (
          <Fragment key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            <br />
          </Fragment>
        );
      })}
    </>
  );
};
