import styled from "styled-components";

import { PRIMARY, SECONDARY, TERTIARY } from "../../constants/color";

const buttonColorMap = {
  PRIMARY: PRIMARY.BUTTON,
  SECONDARY: SECONDARY.BUTTON,
  TERTIARY: TERTIARY.BUTTON,
};

const Button = styled.button`
  padding: 16px 24px;
  min-width: 200px;
  color: ${({ type }) => buttonColorMap[type].DEFAULT.COLOR};
  background: ${({ type }) => buttonColorMap[type].DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  border: ${({ type }) => type === 'TERTIARY' && `1px solid ${buttonColorMap[type].DEFAULT.BORDER}`};

  &:hover {
    background: ${({ type }) => buttonColorMap[type].HOVER.BACKGROUND};
    color: ${({ type }) => buttonColorMap[type].HOVER.COLOR};
    border: ${({ type }) => type === 'TERTIARY' && `1px solid ${buttonColorMap[type].HOVER.BORDER}`};
  }
  &:active {
    background: ${({ type }) => buttonColorMap[type].PRESSED.BACKGROUND};
    color: ${({ type }) => buttonColorMap[type].PRESSED.COLOR}; 
    border: ${({ type }) => type === 'TERTIARY' && `1px solid ${buttonColorMap[type].PRESSED.BORDER}`};
  }
  &:disabled {
    background: ${({ type }) => buttonColorMap[type].DISABLED.BACKGROUND};
    color: ${({ type }) => buttonColorMap[type].DISABLED.COLOR};
    border: ${({ type }) => type === 'TERTIARY' && `1px solid ${buttonColorMap[type].DISABLED.BORDER}`};
  }
`;

export default Button;

