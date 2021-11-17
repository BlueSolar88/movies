import styled from "styled-components";

export const MovieCardStyled = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 6px;
  margin-bottom: 25px;

  &.active {
    border: solid 3px #ccc;
  }
`;

export const TitleSection = styled.span`
  margin-bottom: 5px;
  font-weight: 600;
`;

export const DetailsSection = styled.div`
  margin-top: 5px;
`;
