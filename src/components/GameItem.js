import { useState } from "react";
import styled from "styled-components";
import { GiIronCross } from "react-icons/gi";
import { SiCircle } from "react-icons/si";

const Wrap = styled.li`
  background-color: #eee;
  width: calc(100% / 3 - 10px / 3);
  height: 32.5%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  :hover {
    background-color: #ccc;
  }
  &[data-active].nought {
    color: #0083d3;
    background-color: #a4dbf7;
  }
  &[data-active].cross {
    color: #ce6200;
    background-color: #f9a058;
  }
`;

const GameItem = ({ signBox, isOddClick }) => {
  const [active, setActive] = useState(false);
  const [classN, setClassN] = useState("");

  const handleClick = () => {
    if (!active) {
      signBox();
      setActive(true);
      setClassN(isOddClick ? "nought" : "cross");
      return;
    } else {
      return;
    }
  };

  return (
    <Wrap
      data-active={active ? true : null}
      className={classN}
      onClick={handleClick}
    >
      {classN === "nought" && <SiCircle size={50} />}
      {classN === "cross" && <GiIronCross size={50} />}
    </Wrap>
  );
};

export default GameItem;
