import styled, { css } from "styled-components";

export const ToggleButton = styled.div`
  width: 42px;
  height: 18px;
  border-radius: 9px;
  background-color: #707070;
  position: relative;
  right: 20px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    background-color: #ece9da;
    border-radius: 9px;
    left: 1px;
    transition: left 0.2s;
  }

  ${({ isEnabled }) => isEnabled && ActiveButton}
`;

const ActiveButton = css`
  background-color: #6c9ffd;

  &:before {
    left: 23px;
    transition: left 0.2s;
  }
`;
