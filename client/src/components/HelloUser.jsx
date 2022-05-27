import { useQuery, gql } from "@apollo/client";

const query = gql`
  query ReactQuery($username: String!) {
    helloWithName(name: $username)
  }
`;

const HelloUser = () => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      username: "hiba",
    },
  });

  return (
    <div>
      {error && <p>Error : {error}</p>}
      {loading && <p>Loading..</p>}
      {data && <h1>data : {data.helloWithName}</h1>}
    </div>
  );
};

export default HelloUser;
