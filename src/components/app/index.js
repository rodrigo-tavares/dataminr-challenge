import { useState, useEffect } from "react";
import styled from "styled-components";
import { getFormData } from "../../data/featureFlagData";
import Dashboard from "../dashboard";

const DefaulStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 2%;
`;

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getFormData);
  }, []);

  return (
    <DefaulStyle>
      <Dashboard features={data.features} />
    </DefaulStyle>
  );
};

export default App;
