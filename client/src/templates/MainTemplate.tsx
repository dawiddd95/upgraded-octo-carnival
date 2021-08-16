import React, { ReactChildren, ReactChild } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/GlobalStyle';
import { theme } from '@theme/mainTheme';

interface IProps {
    children: ReactChildren | ReactChild
}

const MainTemplate: React.FC<IProps> = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</>
	);
};

export default MainTemplate;