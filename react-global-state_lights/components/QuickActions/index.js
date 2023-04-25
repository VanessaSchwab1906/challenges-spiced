import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, setLights }) {
  function turnAllLights(status) {
    setLights(lights.map((light) => ({ ...light, isOn: status })));
  }

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          turnAllLights(false);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          turnAllLights(true);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
