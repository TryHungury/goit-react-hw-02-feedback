import { Box } from "components/box/Box"
import styled from "styled-components"

const Paragraph = styled.p`
    text-align: center;
    border-radius: ${p=>p.theme.radii.normal};
    background-color: ${p=>p.theme.colors.text};
    color: ${p=>p.theme.colors.accent};
    padding: ${p=>p.theme.space[2]}px;
    margin-bottom: ${p=>p.theme.space[4]}px; 
    font-weight: ${p=>p.theme.fontWeights.heading};
    font-family: ${p=>p.theme.fonts.heading};
    font-size: ${p=>p.theme.fontSizes[4]}px;
    border: none;
`

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return <Box width="600px" display="flex" flexDirection="column" justifyContent="center" alignItems="start" mt="4" p="4">
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total}</Paragraph>
        <Paragraph>Positive Feedback: {Math.round(positivePercentage)}%</Paragraph>
    </Box>
}