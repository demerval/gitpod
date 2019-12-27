import React from 'react';

import { Container, ContainerText, ButtonTeste, ButtonTesteText } from './styles.js';

const Page1 = ({ navigation }) => {

  function onClick() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <ContainerText>Page 1</ContainerText>
      <ButtonTeste onPressOut={onClick}>
        <ButtonTesteText>Voltar</ButtonTesteText>
      </ButtonTeste>
    </Container>
  );
}

export default Page1;