import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { GlobalStyles } from './GlobalStyle';
import { AppWraper } from './App.styled';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState( prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleClickNeutral = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      })
    );
  };
  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () =>{
    const {good} = this.state;
    const totalFeedback = this.totalFeedback();
    return Math.round((good / totalFeedback) * 100)
   
    }

  render() {
   
    const total = this.totalFeedback();
    const positive = this.positiveFeedback();
    

    return (
      <AppWraper>
        <FeedbackOptions
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
        />
        {total > 0 ? (<Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          totalFeedback={total}
          positiveFeedback={positive}

        />) : <Notification message="There is no feedback"/>
      }
      <GlobalStyles/>
      </AppWraper>
    );
  }
}
