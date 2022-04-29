import styled from "styled-components";
import { Card } from "./Card.tsx";

const StyledBoard = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  box-shadow: 0 1em 2em 0 rgba(0, 0, 0, 0.2);
  padding: 1em;
  padding-left: 3vw;
  padding-bottom: 25vw;
  background-color: #dc143c;
  min-height: 20vw;
  height: 60vw;
  > div {
    position: relative;
    &:nth-child(1) {
      z-index: 5;
    }
    &:nth-child(2) {
      z-index: 4;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 2;
    }
    &:nth-child(5) {
      z-index: 1;
    }
  }
`;

export const Board = ({ flop, turn, river }: BoardProps) => {
  return (
    <StyledBoard>
      {flop &&
        flop.map((card, idx) => {
          const { suit, rank } = card;
          return <Card suit={suit} rank={rank} isFlop />;
        })}
      {turn && <Card suit={turn.suit} rank={turn.rank} />}
      {river && <Card suit={river.suit} rank={river.rank} />}
    </StyledBoard>
  );
};

type BoardProps = {
  flop: Array<Card>;
  turn: Card;
  river: Card;
};
