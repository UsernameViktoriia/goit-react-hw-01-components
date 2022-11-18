import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItemWrapper, StatusTrue, StatusFalse, Avatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline=true }) => {
    return (
        <FriendListItemWrapper>
            {isOnline ? <StatusTrue /> : <StatusFalse />}
            <Avatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendListItemWrapper>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};