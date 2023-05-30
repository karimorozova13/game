import styled, { keyframes } from "styled-components";

const pulse = keyframes`
0% {
    text-shadow: 0 0 10px #fff,
               0 0 20px #fff,
               0 0 30px #fff,
               0 0 40px #9a0e2a,
               0 0 70px #9a0e2a,
               0 0 80px #9a0e2a,
               0 0 100px #9a0e2a,
               0 0 300px #9a0e2a;
  }
  100% {
    text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 15px #fff,
               0 0 20px #9a0e2a,
               0 0 35px #9a0e2a,
               0 0 40px #9a0e2a,
               0 0 150px #9a0e2a,
               0 0 300px #9a0e2a;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Title = styled.h1`
  font-size: 45px;
  color: #9a0e2a;
  text-transform: uppercase;
  animation: ${pulse} 1.5s ease-in-out infinite alternate;
  backface-visibility: hidden;
`;

const Modal = ({ onClick, winner }) => {
  return (
    <Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClick();
        }
      }}
    >
      <Title>{winner ? "Nought Win!" : "Cross Win!"}</Title>
    </Backdrop>
  );
};

export default Modal;
