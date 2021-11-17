import styled from "styled-components";

export const MovieCardStyled = styled.div`
  width: 250px;
  outline: 1px solid #0198fa;
  border: 3px solid transparent;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 6px;
  margin-bottom: 25px;

  &.active {
    outline: 0px solid transparent;
    border: 3px solid #0198fa;
  }
`;

export const TitleSection = styled.span`
  margin-bottom: 5px;
  font-weight: 600;
`;

export const DetailsSection = styled.div`
  margin-top: 5px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
