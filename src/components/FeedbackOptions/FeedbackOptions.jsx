import PropTypes from 'prop-types';
import { StyledButton, StyledButtonContainer } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <StyledButtonContainer>
      {options.map((option, index) => (
          <StyledButton key={index} type="button" onClick={() => onFeedback(option)}>{option}
        </StyledButton>
      ))}
    </StyledButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
}