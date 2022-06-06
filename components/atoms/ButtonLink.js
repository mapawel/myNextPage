/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const buttonShadowAnim = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
const buttonAnim = keyframes`
0% {
  opacity: 1;
}
20% {
  opacity: 0.2;
}
40% {
  opacity: 0.7;
}
55% {
  opacity: 0.3;
}
70% {
  opacity: 0.85;
}
85% {
  opacity: 0.4;
}
100% {
  opacity: 1;
}
`;

const StyledButton = styled.a`
  text-decoration: none;
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.color.textPrimary};
  border: ${({ theme }) => `2px solid ${theme.color.textPrimary}`};
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-family: ${({ theme }) => theme.fontFamily.secondary}
  text-align: center;
  ${({ variant }) => {
    switch (variant) {
      case 'noborder':
        return css`
          border: ${({ theme }) => `0px solid ${theme.color.textPrimary}`};
        `;
      case 'cta':
        return css`
          border: ${({ theme }) => `5px solid ${theme.color.textPrimary}`};
        `;
      default:
        return css`
          border: ${({ theme }) => `2px solid ${theme.color.textPrimary}`};
        `;
    }
  }}
  cursor: pointer;
  ::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 1rem lime;
    opacity: 0;
  }
  :hover{
    animation: ${buttonAnim} .5s;
    ::before{
      animation: ${buttonShadowAnim} .6s .2s both;
    }
  }

  :disabled, button[disabled]{
    color: grey;
    cursor: auto;
    border-color: grey;
    :hover{
      animation: none;
      ::before{
        animation: none;
      }
    }
  }
`;

const Button = React.forwardRef(
  (
    {
      children,
      className,
      onClick,
      disabled,
      type,
      variant,
      href,
      target,
      rel,
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      variant={variant}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </StyledButton>
  )
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  disabled: null,
  type: null,
  onClick: null,
  variant: null,
};

export default Button;
