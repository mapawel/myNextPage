import { theme } from 'themes/theme';

export const inputMixin = () =>
  `
    display: block;
    width: 100%;
    height: 6rem;
    padding: 2rem 5rem .5rem 3rem;
    background-color: ${theme.color.primaryOpacity};
    border: none;
    color: ${theme.color.textPrimary};
    font-family: ${theme.fontFamily.main};
    font-size: ${theme.fontSize.s};
    line-height: 1;
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand{
        display: none;
        }
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        margin: 0;
        position: relative;
    }
    &:focus {
        outline: none;
        box-shadow: inset 0 0 10px ${theme.color.primary};
    }
    &:focus ~label, &:not(:placeholder-shown) ~label {
        transform: scale(.6) translate(-40%, -200%);
    }
    `;
