/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { getJobRoles } from '../state/actions/jobroles';

const data = [
  { interest: 'Front End', id: uuid(), count: 10 },
  { interest: 'Back End', id: uuid(), count: 20 },
  { interest: 'Full Stack', id: uuid(), count: 20 },
  { interest: 'Data Science', id: uuid(), count: 0 },
  { interest: 'Machine Learning', id: uuid(), count: 15 },
  { interest: 'User Experience', id: uuid(), count: 0 },
  { interest: 'Mobile Development', id: uuid(), count: 5 },
  { interest: 'Product Manager', id: uuid(), count: 0 },
];

const RADIAN = Math.PI / 180;
const COLOURS = [
  '#1E5896',
  '#ABE7DD',
  '#368DA7',
  '#EBEBCE',
  '#6ABAC5',
  '#BAD38F',
  '#83D0BC',
  '#0C3C78',
  '#D2E3D0',
];
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent === 0) {
    return null;
  }

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const JobTitleVisualization = ({ isFetching, jobroles, getJobRoles }) => {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getJobRoles();
  }, [getJobRoles]);

  useEffect(() => {
    const roles = [...jobroles];
    data.forEach(item => {
      const index = roles.findIndex(e => e.interest === item.interest);

      if (index === -1) {
        roles.push(item);
      }
    });
    setState(
      roles.map(item => {
        return {
          ...item,
          count: parseInt(item.count, 10),
        };
      })
    );
    setTotal(
      state.reduce((acc, obj) => {
        acc += obj.count;
        return acc;
      }, 0)
    );
  }, [jobroles]);

  return (
    <StyledContainer>
      {!isFetching ? (
        <>
          {jobroles.length !== 0 && total !== 0 ? (
            <>
              <PieChart width={300} height={300}>
                <Pie
                  data={state}
                  cx={150}
                  cy={150}
                  innerRadius={50}
                  outerRadius={100}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {state.map((entry, index) => (
                    <Cell
                      key={entry.id}
                      fill={COLOURS[index % COLOURS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <Legend
                verticalAlign="right"
                content={() => (
                  <ul className="legends">
                    {state.map((entry, index) => (
                      <li key={entry.id}>
                        <span
                          style={{
                            background: `${COLOURS[index % COLOURS.length]}`,
                          }}
                        />
                        {`${entry.interest} - ${(
                          (entry.count / total) *
                          100
                        ).toFixed(0)}%`}
                      </li>
                    ))}
                  </ul>
                )}
              />
            </>
          ) : (
            <div className="empty-state">
              <p>No data to display</p>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <Spin />
        </div>
      )}
    </StyledContainer>
  );
};

const mapStateToProps = state => ({
  isFetching: state.jobroles.isFetching,
  jobroles: state.jobroles.jobroles,
});

export default connect(mapStateToProps, { getJobRoles })(JobTitleVisualization);

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 300px;
  position: relative;

  .recharts-legend-wrapper {
    position: static !important;
    top: unset !important;
    left: unset !important;
  }

  .legends {
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      color: #000;
      margin-bottom: 0.75rem;
      font-size: 0.85rem;
    }

    span {
      height: 20px;
      width: 20px;
      margin-right: 0.5rem;
      display: inline-block;
    }
  }
`;
