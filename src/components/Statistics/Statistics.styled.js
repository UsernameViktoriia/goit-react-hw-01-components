import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  background: white;
  box-shadow: 0px 0px 7px 0px grey;
  border-radius: 4px;
`;
export const StatisticTittle = styled.h2`
  margin: 25px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  color: grey;
  text-transform: uppercase;
`;
export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-between;
  color: grey;
`;
export const StatisticItem = styled.li`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 80px;
  color: white;
  background-color: ${({ colorBg }) => colorBg};
`;
export const StatisticLabel = styled.span`
  font-size: 20px;
`;
export const StatisticPercent = styled.span`
  font-size: 30px;
`;
