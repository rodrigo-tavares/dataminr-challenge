import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { Toggle } from "../toggle";
import { ActionButtons, ContainerLine, Line, LineLabel } from "./styles";

export const LineFeature = ({
  name,
  value,
  onChange,
  hasChildren,
  isGroupLine = false,
}) => {
  const [toggleValue, setToggleValue] = useState(value);

  const onChangeToggle = () => {
    setToggleValue(!toggleValue);
    onChange(!toggleValue);
  };

  return (
    <ContainerLine isGroupLine={isGroupLine}>
      <Line>
        <LineLabel>{name}</LineLabel>
      </Line>
      <ActionButtons isGroupLine={isGroupLine && hasChildren}>
        <Toggle value={toggleValue} onClick={onChangeToggle} />
        {isGroupLine && hasChildren && (
          <FontAwesomeIcon icon={toggleValue ? faChevronUp : faChevronDown} />
        )}
      </ActionButtons>
    </ContainerLine>
  );
};
