import styled from "styled-components";

const StyledControls = styled.div`
  margin-left: auto;
  .actions {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    button {
      font-size: 2vh;
    }
  }
`;

export const Controls = () => {
  return (
    <StyledControls>
      <div className="actions">
        <button>Fold</button>
        <button>Call 900</button>
        <button>Raise to 1800</button>
      </div>
    </StyledControls>
  );
};
