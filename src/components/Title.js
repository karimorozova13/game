import styled from "styled-components";

const MainT = styled.h1`
  font-size: 33px;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 300;
  color: #666;
  span {
    font-weight: 700;
    padding: 8px;
    border-radius: 4px;
    &.nought {
      color: #0083d3;
      background-color: #a4dbf7;
      margin-right: 5px;
    }
    &.cross {
      color: #ce6200;
      background-color: #f9a058;
      margin-left: 5px;
    }
  }
`;

const Title = ({ nought, cross }) => {
  return (
    <MainT>
      <span className={"nought"}>{nought}</span>
      {"&"}
      <span className={"cross"}>{cross}</span>
    </MainT>
  );
};

export default Title;
