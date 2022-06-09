import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const RQSuperHeroesPage = () => {
  // Success and Error Callbacks
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching 🥰🥰 ", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error 🥰🥰", error);
  };

  // const results = useQuery("super-heroes", () => { 밑에처럼 destructure

  //useQuery부터 잘라서 hooks > useSuperHeroesData.js로 이동. (Custom Query Hook)
  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "super-heroes",
  //   fetchSuperHeroes,
  //   {
  //     // onSuccess: onSuccess,
  //     // onError: onError,
  //     onSuccess,
  //     onError,
  //     // 줄이기 가능
  //     //
  //     // data transformation
  //     select: (data) => {
  //       const superHeroNames = data.data.map((hero) => hero.name);
  //       return superHeroNames;
  //     },
  //   }
  // );

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>...loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperheroes</h2>
      <button onClick={refetch}> Fetch heroes</button>
      <br />
      {data?.data.map((hero) => {
        return (
          <Fragment key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            <br />
          </Fragment>
        );
      })}

      {/* select를 이용해 data transforming 했을때 아래처럼 쓰임.
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};

// react query는 자동으로 retry를 하기때문에 약간의 딜레이 후 에러메시지를 보인다.
