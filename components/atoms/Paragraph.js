import styled from 'styled-components';
import { breakpoint } from 'breakpoints';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme, bold }) => (bold ? theme.fontWeight.semibold : theme.fontWeight.regular)};
  line-height: 1.5;

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme, inSwiper }) => inSwiper ? theme.fontSize.s : theme.fontSize.m};
    }
`;

export default Paragraph;
