import styled from "styled-components";

export const SelectContainer = styled.div`
  height: 48px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  right: 50px;
  background-color: #000000;
`;

export const SelectHeader = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SelectOptions = styled.div`
  padding: 5px;
  position: relative;
  top: -15px;
  z-index: 1;
  background-color: #000000;
  display: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  ${({ isOpen }) => isOpen && `display: block;`}
`;

export const SelectItem = styled.div`
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
    font-weight: 900;
  }
`;
