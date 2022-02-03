import styled from "styled-components";

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({hasItems}) => hasItems ? `width: 100%;` : `width: 33%;`}
  margin-bottom: 2rem;

  @media(max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const GridLines = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`;
