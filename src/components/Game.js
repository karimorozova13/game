import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

import GameItem from "./GameItem";
import Modal from "./Modal";

const GameBox = styled.ul`
  max-width: 365px;
  height: 365px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Game = () => {
  const [clickAmount, setClickAmount] = useState(0);
  const [current, setCurrent] = useState(null);
  const [isOddClick, setIsOddClick] = useState(true);
  const [finalA, setFinalA] = useState([[], [], [], [], [], [], [], [], []]);

  const router = useRouter();

  const findWinner = (arr) => {
    if (arr[0] === arr[1] && arr[1] === arr[2]) return true;
    if (arr[3] === arr[4] && arr[4] === arr[5]) return true;
    if (arr[6] === arr[7] && arr[7] === arr[8]) return true;
    if (arr[0] === arr[3] && arr[3] === arr[6]) return true;
    if (arr[1] === arr[4] && arr[4] === arr[7]) return true;
    if (arr[2] === arr[5] && arr[5] === arr[8]) return true;

    return false;
  };
  const countClicks = (idx, el) => {
    let x;
    setClickAmount((prevState) => (prevState += 1));
    clickAmount % 2 !== 0 ? setIsOddClick(true) : setIsOddClick(false);
    x = isOddClick ? 0 : 1;

    setCurrent(idx);
    setFinalA((prev) => {
      prev[idx] = x;
      return prev;
    });
  };

  return (
    <GameBox>
      {finalA.map((el, idx) => {
        return (
          <GameItem
            key={idx}
            signBox={() => countClicks(idx, el)}
            current={current === idx}
            isOddClick={isOddClick}
          />
        );
      })}

      {findWinner(finalA) && (
        <Modal winner={!isOddClick} onClick={() => router.reload()} />
      )}
    </GameBox>
  );
};

export default Game;
