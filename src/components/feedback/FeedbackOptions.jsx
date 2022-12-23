import { Box } from "components/box/Box"
import styled from "styled-components"

const ButtonFeedback = styled.button`
    text-align: center;
    border-radius: ${p=>p.theme.radii.normal};
    background-color: ${p=>p.theme.colors.text};
    color: ${p=>p.theme.colors.accent};
    padding: ${p=>p.theme.space[4]}px;
    font-weight: ${p=>p.theme.fontWeights.heading};
    font-family: ${p=>p.theme.fonts.heading};
    font-size: ${p=>p.theme.fontSizes[4]}px;
    border: none;
    cursor: pointer;
    transition: background-color linear 500ms,
    color linear 500ms;
    &:hover, &:focus {
        background-color: ${p=>p.theme.colors.accent};
        color: ${p=>p.theme.colors.text};
    }
`

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Box display="flex" justifyContent="space-evenly" mt="5">
            {options.map(option=>{
                return (
                    <ButtonFeedback type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}</ButtonFeedback>
                )
            })}
        </Box>
    )
}