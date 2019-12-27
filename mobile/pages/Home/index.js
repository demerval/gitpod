import React from 'react';
import { Container, ContainerText, ButtonTeste, ButtonTesteText } from './styles.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

export default function Home({ navigation }) {

  onClick = () => {
    navigation.navigate('Page1');
  }


  return (
    <Container>
      <Header />
    </Container>
  );


}
