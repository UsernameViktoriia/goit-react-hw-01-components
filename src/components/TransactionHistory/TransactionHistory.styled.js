import styled from 'styled-components';

export const Table = styled.table`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  margin-bottom: 45px;
  box-shadow: 0px 0px 7px 0px grey;
  border-radius: 4px;
  border: 1px solid rgba(179, 188, 203, 0.29);
`;
export const Thead = styled.thead`
  height: 60px;
  background-color: rgba(91, 207, 209, 0.89);
  color: white;
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const Row = styled.tr`
  height: 60px;
  text-align: center;
  color: grey;
  font-size: 30px;
  font-weight: 500;
  background-color: ${({ isEven }) =>
    isEven ? 'white' : 'rgba(179, 188, 203, 0.29)'};
`;
export const Type = styled.td`
  text-transform: capitalize;
`;
