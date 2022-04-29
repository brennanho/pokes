import styled from "styled-components";
import { Card } from "./Card.tsx";
import { Controls } from "./Controls.tsx";

const StyledHand = styled.div`
  display: flex;
  gap: 1vw;
  background-color: #325656;
  padding: 0.5em;
  align-items: center;
  justify-content: center;
  .hidden {
    transform: translateX(0%);
  }
`;

export const Hand = ({ cards, me, isHidden }) => {
  return (
    <StyledHand>
      {cards.map((card, idx) => {
        const { suit, rank } = card;
        return <Card suit={suit} rank={rank} key={idx} isHidden={isHidden} />;
      })}
      {me && <Controls />}
    </StyledHand>
  );
};
