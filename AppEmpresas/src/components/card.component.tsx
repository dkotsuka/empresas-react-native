import React from 'react';
import styled from 'styled-components/native';

interface CardProps {
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Container disabled={!props.onPress} onPress={props.onPress}>
      {props.children}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  border-radius: 8px;
  margin-horizontal: 16px;
  margin-vertical: 8px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
