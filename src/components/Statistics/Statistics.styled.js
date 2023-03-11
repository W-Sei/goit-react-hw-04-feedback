import styled from 'styled-components';

export const StyledStatistics = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledStatisticsText = styled.p`
  background: yellowgreen;
  border-radius: 10px;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
  padding: 10px;
  line-height: 30px;
  min-width: 80px;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  color: black;
`;

export const StyledStatisticsResult = styled.span`
  color: black;
  font-weight: 500;
  font-size: 20px;
`;

export const StyledStatisticsTotal = styled.p`
  color: black;
  text-align: center;
  font-size: 16px;
  margin-left: 10px;
  font-weight: 500;
  margin-top: 10px;
`;
