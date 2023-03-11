import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from 'GlobalStyles.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = (feedbackType) => {
    this.setState(prev => ({ [feedbackType]: prev[feedbackType] + 1 }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <StyledContainer>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onFeedback={this.onFeedback}
          />
        </Section>
        <Section title="Statsics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              points={this.state}
              onTotalCount={this.countTotalFeedback}
              onPositivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StyledContainer>
    );
  }

  static propTypes = {
    title: PropTypes.string,
  };
}
