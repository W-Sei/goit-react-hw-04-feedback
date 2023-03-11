import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;
export const StyledButton = styled.button`
  background: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
  border: none;
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  min-width: 80px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: black;
    color: white;
    transition: 1.4s;
  }
`;
