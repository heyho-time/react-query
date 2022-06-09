import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=3&_page=${pageNumber}`);
};

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {data?.data.map((color) => {
        return (
          <h2 key={color.id}>
            {color.id}. {color.label}
          </h2>
        );
      })}
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          prev
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          next
        </button>
      </div>
      {isFetching && "Loading"}
    </>
  );
};
