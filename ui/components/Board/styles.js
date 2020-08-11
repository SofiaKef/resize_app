import styled from 'styled-components';

const Board = styled.div`
  .board-row:after {
    clear: both;
    content: '';
    display: table;
  }
`;

export default {
  Board,
};
