import styled from "styled-components";
import { Box } from "./box/Box";
import { Feedback } from "./feedback/Feedback";

const Title = styled.h1`
  border-radius: ${p=>p.theme.radii.normal};
  background-color: ${p=>p.theme.colors.text};
  color: ${p=>p.theme.colors.accent};
  margin: ${p=>p.theme.space[0]}px auto;
  padding: ${p=>p.theme.space[3]}px;
  margin-top: ${p=>p.theme.space[3]}px;
  font-weight: ${p=>p.theme.fontWeights.bold};
  font-family: ${p=>p.theme.fonts.monospace};
`

export const App = () => {
  return (
    <Box height= "100%"  display= "flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" fontSize= "40px" backgroundColor="backgroundSecondary">
      <Title>I want peace</Title>
      <Feedback></Feedback>
    </Box>
  );
};
