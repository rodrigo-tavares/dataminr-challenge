import { EmptyData } from "../emptyData";
import FeatureGroup from "../featureGroup";
import { Container } from "./styles";

const Dashboard = ({ features }) => {
  return (
    <Container>
      {features && features.length > 0 ? (
        features.map((item, key) => (
          <FeatureGroup
            key={key}
            name={item.name}
            items={item.items}
            childs={item.childs}
          />
        ))
      ) : (
        <EmptyData />
      )}
    </Container>
  );
};

export default Dashboard;
