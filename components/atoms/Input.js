/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import { inputMixin } from 'components/atoms/inputMixin';

const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
  & > textarea {
    resize: vertical;
  }
`;

const StyledSelect = styled.select`
  ${inputMixin};
`;

const StyledInput = styled.input`
  ${inputMixin};
`;

const StyledTextArea = styled.textarea`
  ${inputMixin};
  min-height: 10rem;
  padding-top: 3rem;
  line-height: 1.4;
  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    transform: scale(0.6) translate(-40%, 0);
    top: 5px;
  }
`;

const StyledLabel = styled.label`
  position: ${({ checkbox }) => (checkbox ? 'relative' : 'absolute')};
  left: ${({ checkbox }) => (checkbox ? '0' : '2rem')};
  top: 50%;
  transform: translate(0, -50%);
  color: ${({ theme }) => theme.color.particles};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.05rem;
  font-style: italic;
  transition: 0.3s;
`;

const StyledCheckbox = styled.input`
  position: relative;
  top: 0.5rem;
  display: inline-block;
  margin-right: 1rem;
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.color.textSecondary};
  border: ${({ theme }) => `3px solid ${theme.color.primary}`};
  padding: 9px;
  border-radius: 2px;
  cursor: pointer;

  ${({ value }) =>
    value &&
    css`
    border: ${({ theme }) => `3px solid ${theme.color.textPrimary}`};
    :after {
      content: '\\2714';
      font-size: 18px;
      position: absolute;
      top: -3px;
      left: 3px;
      color: ${({ theme }) => theme.color.textPrimary};
    }
  }
  `}
`;

const StyledOption = styled.option`
  color: ${({ theme }) => theme.color.textPrimary};
  background-color: ${({ theme }) => theme.color.back};
`;

const StyledInputHeader = styled(Paragraph)`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 0.05rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.textSecondary};
  text-transform: uppercase;
`;

const Input = ({
  select,
  textarea,
  checkbox,
  id,
  onChange,
  value,
  labelTxt,
  labelComponent,
  children,
  name,
  headerTxt,
  onBlur,
  ...props
}) => {
  let Tag = select ? StyledSelect : StyledInput;
  Tag = textarea ? StyledTextArea : Tag;
  Tag = checkbox ? StyledCheckbox : Tag;
  const options = select
    ? select.map((sel) => (
        <StyledOption key={sel} value={sel[0]}>
          {sel[1]}
        </StyledOption>
      ))
    : null;

  return (
    <>
      <StyledInputHeader>{headerTxt}</StyledInputHeader>
      <StyledInputContainer>
        <Tag
          key={id}
          name={name}
          type={checkbox ? 'checkbox' : 'text'}
          id={id}
          placeholder=" "
          autoComplete="none"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          {...props}
        >
          {select && options}
        </Tag>
        <StyledLabel htmlFor={id} checkbox={checkbox}>
          {labelTxt}
        </StyledLabel>
        {labelComponent && (
          <StyledLabel as="span" checkbox={checkbox}>
            {' '}
            {labelComponent}
          </StyledLabel>
        )}
        {children}
      </StyledInputContainer>
    </>
  );
};

Input.propTypes = {
  select: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ),
  textarea: PropTypes.oneOf([1]),
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
    PropTypes.bool,
  ]),
  labelTxt: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  headerTxt: PropTypes.string,
};

Input.defaultProps = {
  select: null,
  textarea: null,
  value: undefined,
  labelTxt: null,
  children: null,
  headerTxt: null,
};

export default Input;
