import { Box } from "components/box/Box";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "components/statistics/Statistics";
import styled from "styled-components";

const { Component } = require("react");

const TitleH2 = styled.h2`
  /* width: 50%; */
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  background-color: ${p=>p.theme.colors.accent};
  margin: ${p=>p.theme.space[0]}px auto;
  padding: ${p=>p.theme.space[2]}px;
  margin-top: ${p=>p.theme.space[5]}px; 
  font-weight: ${p=>p.theme.fontWeights.heading};
  font-family: ${p=>p.theme.fonts.heading};
`

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleLeaveFeedback = (e) => {
        const buttonName = e.target.name.toLowerCase();

        this.setState((prevState)=>{
            return {
                [buttonName]: prevState[buttonName] += 1
            }
        })
    }

    countTotalFeedback = () => {
        this.setState(({good,neutral,bad})=>{
            return good + neutral + bad;
        })
    }

    countPositivePercentage = () => {
        this.setState((prevState)=>{
            console.log(prevState.good)
        })
    }


    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <Box as={"section"}>
                    <TitleH2>Please leave feedback</TitleH2>
                    <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.handleLeaveFeedback}></FeedbackOptions>
                </Box>
                <Box as={"section"}>
                    <TitleH2>Statistics</TitleH2>
                    <Statistics good={good} neutral={neutral} bad={bad} total={good+neutral+bad}></Statistics>
                </Box>
            </>
        )
    }
}