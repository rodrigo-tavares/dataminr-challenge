import { useState } from "react";
import { Toggle } from "../toggle";
import { ContainerLine, Line, LineLabel } from "./styles";

export const LineFeature = ({ name, value }) => {
  const [enabled, setEnabled] = useState(value);

  const onChangeToggle = () => {
    setEnabled(!enabled);
  };

  return (
    <ContainerLine>
      <Line>
        <LineLabel>{name}</LineLabel>
      </Line>

      <Toggle value={enabled} onClick={onChangeToggle} />
    </ContainerLine>
  );
};
