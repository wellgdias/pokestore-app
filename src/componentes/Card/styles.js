import styled from 'styled-components/native';

export const View = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  padding-bottom: 8px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: black;
  padding-bottom: 4px;
`;

export const Type = styled.Text`
  font-size: 10px;
  color: white;
  background-color: #356abc;
  border-radius: 5px;
  margin: 2px;
  padding: 2px 4px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding-bottom: 4px;
`;
