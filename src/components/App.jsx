import { useState } from 'react';

import { StyledContainer } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from 'GlobalStyles.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const handleFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const positivePercentage = () => {
    const percentage = Math.round((good / (good + bad + neutral)) * 100);
    return percentage;
  };

  return (
    <StyledContainer>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statsics">
        {totalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </StyledContainer>
  );
};
