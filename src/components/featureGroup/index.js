import { GroupLineFeature } from "../../shared/groupLineFeature";
import { LineFeature } from "../../shared/lineFeature";
import { Container, GridLines, Title } from "./styles";

const FeatureGroup = ({ name, items, childs }) => {
  const validItems = items && items.length > 0;
  const validChilds = childs && childs.length > 0;

  return (
    <Container hasItems={validItems}>
      <Title>{name}</Title>
      <GridLines>
        {validItems &&
          items.map((item, key) => (
            <LineFeature
              key={key}
              name={item.title}
              value={item.value}
              hasChildren={false}
              onChange={() => {}}
            />
          ))}
        {validChilds && <GroupLineFeature childs={childs} />}
      </GridLines>
    </Container>
  );
};

export default FeatureGroup;
