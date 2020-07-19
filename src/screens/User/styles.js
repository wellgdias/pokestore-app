import styled from 'styled-components/native';

export const View = styled.View`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  height: 100%;
  padding: 100px 0;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Name = styled.Text`
  font-size: 16px;
  margin-bottom: 2px;
`;

export const Text = styled.Text`
  font-size: 12px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 10px;
`;
