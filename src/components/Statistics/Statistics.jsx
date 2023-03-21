import PropTypes from 'prop-types';
import {
  StyledStatistics,
  StyledStatisticsText,
  StyledStatisticsResult,
  StyledStatisticsTotal,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StyledStatistics>
        <StyledStatisticsText>
          Good: <StyledStatisticsResult>{good}</StyledStatisticsResult>
        </StyledStatisticsText>
        <StyledStatisticsText>
          Neutral: <StyledStatisticsResult>{neutral}</StyledStatisticsResult>
        </StyledStatisticsText>
        <StyledStatisticsText>
          Bad: <StyledStatisticsResult>{bad}</StyledStatisticsResult>
        </StyledStatisticsText>
      </StyledStatistics>
      <StyledStatisticsTotal>
        Total: <StyledStatisticsResult>{total}</StyledStatisticsResult>
      </StyledStatisticsTotal>
      <StyledStatisticsTotal>
        Positive feedback:
        <StyledStatisticsResult>
          {positivePercentage ? positivePercentage : '0'}%
        </StyledStatisticsResult>
      </StyledStatisticsTotal>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
