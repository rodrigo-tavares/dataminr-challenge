import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { Toggle } from "../toggle";
import { ActionButtons, ContainerLine, Line, LineLabel } from "./styles";
import { MultiSelect } from "../multiSelect";
import { NormalizeOptions } from "../util";

export const LineFeature = ({
  name,
  value,
  onChange,
  hasChildren,
  isGroupLine = false,
  maxValue = 0,
  selectedValue = null,
  frequency = 0,
}) => {
  const [toggleValue, setToggleValue] = useState(value);

  const onChangeToggle = () => {
    setToggleValue(!toggleValue);
    onChange(!toggleValue);
  };

  const selectOptions = NormalizeOptions(maxValue, frequency);

  return (
    <ContainerLine isGroupLine={isGroupLine}>
      <Line>
        <LineLabel>{name}</LineLabel>
      </Line>
      <ActionButtons isGroupLine={isGroupLine && hasChildren}>
        {selectOptions && selectOptions.length > 0 && (
          <MultiSelect
            key={name}
            values={selectOptions}
            selectedValue={selectedValue}
          />
        )}
        <Toggle value={toggleValue} onClick={onChangeToggle} />
        {isGroupLine && hasChildren && (
          <FontAwesomeIcon icon={toggleValue ? faChevronUp : faChevronDown} />
        )}
      </ActionButtons>
    </ContainerLine>
  );
};
