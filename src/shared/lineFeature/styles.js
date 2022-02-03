import styled from "styled-components";

export const ContainerLine = styled.div`
  margin-bottom: 5px;
  position: relative;
  ${({ isGroupLine }) => (isGroupLine ? `flex: 1;` : `flex: 0 0 32.5%;`)}
  background-color: #18191d;
  border: 2px solid #1b1c20;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButtons = styled.div`
  position: relative;
  display: flex;
  width: 29%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  ${({ isGroupLine }) => isGroupLine && `padding-right: 20px;`}
`;

export const Line = styled.div`
  height: 60px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LineLabel = styled.div`
  width: 100%;
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  padding-left: 45px;
  font-weight: 700;

  @media only screen and (min-width: 720px) {
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
