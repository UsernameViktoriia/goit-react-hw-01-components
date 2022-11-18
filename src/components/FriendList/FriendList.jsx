import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import { FriendListSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return <FriendListSection>
        {friends.map(({ id, name, isOnline, avatar }) => (
            <FriendListItem key={id}
                name={name}
                isOnline={isOnline}
                avatar={avatar}
            />
        ))}
    </FriendListSection>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}