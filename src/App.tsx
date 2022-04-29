import { useState, useMemo } from "react";
import styled from "styled-components";
// Components
import { Board } from "./Board.tsx";
import { Hand } from "./Hand.tsx";
// Classes
import { Deck } from "./Deck.ts";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const deck = useMemo(() => new Deck(), []);
  const [flop, setFlop] = useState([]);
  const [turn, setTurn] = useState();
  const [river, setRiver] = useState();
  const player1Hand = useMemo(() => deck.dealHand(), []);
  const player2Hand = useMemo(() => deck.dealHand(), []);
  const reveal = useMemo(() => !river, [river]);
  return (
    <StyledApp>
      <button onClick={() => setFlop(deck.dealFlop())}>DEAL FLOP</button>
      <button onClick={() => setTurn(deck.dealTurnRiver())}>DEAL TURN</button>
      <button onClick={() => setRiver(deck.dealTurnRiver())}>DEAL RIVER</button>
      <Hand cards={player2Hand} isHidden={reveal} />
      <Board flop={flop} turn={turn} river={river} />
      <Hand cards={player1Hand} me />
    </StyledApp>
  );
}

export default App;
