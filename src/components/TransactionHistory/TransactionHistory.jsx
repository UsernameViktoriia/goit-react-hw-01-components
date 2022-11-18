import React from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Row, Type } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Thead>

            <tbody>
                {items.map(({ id, type, amount, currency }, index) => {
                    const isEven = (index + 1) % 2;
                    return <Row isEven={isEven} key={id}>
                        <Type>{type}</Type>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </Row>
                })}
            </tbody>
        </Table>
    )
};

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};