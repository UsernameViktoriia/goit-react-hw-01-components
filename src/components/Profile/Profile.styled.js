import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  background: white;
  box-shadow: 0px 0px 7px 0px grey;
  border-radius: 4px;
`;
export const DescriptionUser = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 20px;
  width: 380px;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
export const UserAvatar = styled.img`
  width: 200px;
  margin-top: 25px;
  border-radius: 50%;
  border: 1px solid grey;
`;
export const UserName = styled.p`
  font-weight: 700;
  font-size: 30px;
`;
export const Tag = styled.p`
  font-weight: 400;
  font-size: 25px;
  color: grey;
`;
export const Location = styled.p`
  font-weight: 400;
  font-size: 30px;
  color: grey;
`;
export const StatsList = styled.ul`
  margin-top: 30px;
  display: flex;
  background: rgba(179, 188, 203, 0.166);
`;

export const StatItem = styled.li`
  width: 130px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(179, 188, 203, 0.622);
`;
export const Label = styled.span`
  margin-top: 10px;
  font-weight: 400;
  font-size: 25px;
  color: grey;
`;
export const Quantity = styled.span`
  font-weight: 900;
  font-size: 25px;
  color: black;
`;
