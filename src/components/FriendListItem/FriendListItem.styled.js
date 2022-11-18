import styled from 'styled-components';

export const FriendListItemWrapper = styled.li`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  box-shadow: 0px 0px 7px 0px grey;
  border-radius: 4px;
`;
export const StatusTrue = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;
export const StatusFalse = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;
export const Avatar = styled.img`
  border-radius: 10px;
`;
export const FriendName = styled.p`
  font-weight: 500;
  font-size: 30px;
  color: black;
`;
