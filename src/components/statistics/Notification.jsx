const { default: styled } = require("styled-components");


const Message = styled.p`
text-align: center;
border-radius: ${p=>p.theme.radii.normal};
background-color: ${p=>p.theme.colors.accent};
margin: ${p=>p.theme.space[0]}px auto;
padding: ${p=>p.theme.space[2]}px;
margin-top: ${p=>p.theme.space[5]}px; 
font-weight: ${p=>p.theme.fontWeights.heading};
font-family: ${p=>p.theme.fonts.heading};
`

export const Notification = ({message}) => {
    return <Message>{message}</Message>
}