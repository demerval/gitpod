import React from 'react';

import { Container, ContainerText, ButtonTeste, ButtonTesteText } from './styles.js';

export default function App() {

	function onClick() {
		console.log('click');
	}

	return (
		<Container>
			<ContainerText>Teste APP Mobile</ContainerText>
			<ButtonTeste onPressOut={onClick}>
				<ButtonTesteText>Teste</ButtonTesteText>
			</ButtonTeste>
		</Container>
	);
}
