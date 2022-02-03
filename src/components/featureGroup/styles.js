import styled from "styled-components";

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({hasItems}) => hasItems && `width: 100%;`}
  margin-bottom: 2rem;
`;

export const GridLines = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
