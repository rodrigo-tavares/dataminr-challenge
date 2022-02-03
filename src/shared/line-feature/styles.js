import styled from "styled-components";

export const ContainerLine = styled.div`
  flex: 0 0 32.5%;
  margin-bottom: 10px;
  position: relative;
`;

export const Line = styled.div`
  background-color: #18191d;
  height: 60px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #1b1c20;
`;

export const LineLabel = styled.div`
  width: 100%;
  font-size: 12px;
  text-transform: uppercase;
  position: relative;
  padding-left: 45px;
  font-weight: 700;

  @media only screen and (min-width: $screen-sm) {
    font-size: 16px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: #707070;
    border-radius: 5px;
    left: 10px;
    top: -4px;
  }
`;
