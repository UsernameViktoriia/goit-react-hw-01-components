import React from 'react';
import { getRandomHexColor } from './RandomColor';
import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticTittle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticTittle>{title}</StatisticTittle>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => {
            const colorBg = getRandomHexColor();
            return (
            <StatisticItem colorBg={colorBg} key={id}>
              <StatisticLabel>{label}</StatisticLabel>
              <StatisticPercent>{percentage}%</StatisticPercent>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};