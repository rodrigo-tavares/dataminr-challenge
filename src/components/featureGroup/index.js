import { LineFeature } from "../../shared/line-feature";
import { Container, GridLines, Title } from "./styles";

const FeatureGroup = ({ name, items, childs }) => {
  const validItems = items && items.length > 0;
  return (
    <Container hasItems={validItems}>
      <Title>{name}</Title>
      <GridLines>
        {validItems && items.map((item, key) => <LineFeature key={key} name={item.title} />)}
      </GridLines>
    </Container>
  );
};

export default FeatureGroup;
