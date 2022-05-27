import { useQuery, gql } from "@apollo/client";

const query = gql`
  query {
    hello
  }
`;

const Hello = () => {
  const { loading, error, data } = useQuery(query);

  return (
    <div>
      {error && <p>Error : {error}</p>}
      {loading && <p>Loading..</p>}
      {data && <h1>data : {data.hello}</h1>}
    </div>
  );
};

export default Hello;
