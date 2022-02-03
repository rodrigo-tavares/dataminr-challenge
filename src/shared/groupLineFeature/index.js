// import { ContainerLine } from "./../lineFeature/styles";
import { useState } from "react";
import { LineFeature } from "../lineFeature";
import { ChildrenContainerGroup, ContainerGroup } from "./styles";

export const GroupLineFeature = ({ childs }) => {
  const [childrenEnabled, setChildrenEnabled] = useState({});

  const validChildren = (children) => children && children.length > 0;

  const renderChildren = (children) => {
    return (
      <ChildrenContainerGroup>
        {children.map((child, key) => (
          <LineFeature
            key={key}
            name={child.title}
            value={child.value}
            isGroupLine={true}
            hasChildren={false}
            onChange={() => {}}
            maxValue={child.maxValue}
            selectedValue={child.selectedValue}
            frequency={child.frequency}
          />
        ))}
      </ChildrenContainerGroup>
    );
  };

  const onToggleChange = (key, value) => {
    setChildrenEnabled({ [key]: value });
  };

  return (
    <ContainerGroup>
      {childs.map((child, key) => (
        <>
          <LineFeature
            key={key}
            name={child.title}
            value={child.value}
            isGroupLine={true}
            hasChildren={validChildren(child.children)}
            onChange={(value) => onToggleChange(key, value)}
            maxValue={child.maxValue}
            selectedValue={child.selectedValue}
            frequency={child.frequency}
          />
          {validChildren(child.children) &&
            childrenEnabled[key] &&
            renderChildren(child.children)}
        </>
      ))}
    </ContainerGroup>
  );
};
