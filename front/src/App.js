import React from "react";
import { useQuery, gql } from "@apollo/client";

const MISSIONS = gql`
  query missions {
    launchNext {
      details
      launch_date_local
      launch_date_unix
      rocket {
        rocket_name
      }
      mission_name
      mission_id
      launch_year
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(MISSIONS);
  console.log(data);
  return <div> IM APP</div>;
}

export default App;
