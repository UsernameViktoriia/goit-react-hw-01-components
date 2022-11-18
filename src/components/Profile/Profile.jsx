import React from 'react';
import PropTypes from 'prop-types';
import {ProfileWrapper, DescriptionUser, UserAvatar, UserName, Tag, Location, StatsList, StatItem, Label, Quantity} from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <ProfileWrapper>
            <DescriptionUser>
                <UserAvatar
                src={avatar ? avatar : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
                alt="User avatar"
                />
                <UserName>{username}</UserName>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </DescriptionUser>

            <StatsList>
                <StatItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
                </StatItem>
                <StatItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
                </StatItem>
                <StatItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
                </StatItem>
            </StatsList>
    </ProfileWrapper>
    )
}
   

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}