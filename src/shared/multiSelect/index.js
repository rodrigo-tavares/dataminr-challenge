import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  SelectContainer,
  SelectHeader,
  SelectItem,
  SelectOptions,
} from "./styles";

export const MultiSelect = ({ values, selectedValue }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selectedValue);

  const toggleSelect = () => setOpen(!isOpen);

  const handleItemClick = (value) => {
    setSelectedItem(value);
    setOpen(!isOpen);
  };

  return (
    <SelectContainer>
      <SelectHeader onClick={toggleSelect}>
        {selectedItem
          ? values.find((item) => item.value === selectedItem).label
          : null}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </SelectHeader>
      <SelectOptions isOpen={isOpen}>
        {values.map((item, key) => (
            <SelectItem onClick={() => handleItemClick(item.value)} key={key}>
              {item.label}
            </SelectItem>
          ))}
      </SelectOptions>
    </SelectContainer>
  );
};
