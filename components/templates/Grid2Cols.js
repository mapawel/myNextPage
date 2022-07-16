import styled from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoint } from 'breakpoints';

const GridWrapper = styled.div`
  margin: 20rem auto 10rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 15rem;

  @media screen and (min-width: ${breakpoint.L}) {
    margin: 20rem auto 60rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
    row-gap: 27rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    column-gap: 20rem;
    row-gap: 35rem;
  }
`;

const Grid2Cols = ({ children }) => <GridWrapper>{children}</GridWrapper>;

Grid2Cols.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Grid2Cols;
