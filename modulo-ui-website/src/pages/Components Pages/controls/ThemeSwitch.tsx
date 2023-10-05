import { useState } from 'react';
import { ToggleSwitch } from 'modulo-ui';
import styled from '@emotion/styled';
import useColorScheme from '../../../hooks/theme-colors';

const ThemeDiv = styled.div<{ theme: { backgroundColor: string } }>`
    display: flex;
    justify-content: center;
    width: 90%;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: background-color 0.3s;
    padding: 2em 0;
    border-radius: 10px;
`;

const ThemeSwitch: React.FC = () => {
  const preferredColorScheme = useColorScheme(); 
  const getControlColor = () => {
      return preferredColorScheme === 'dark' ? 'cyan' : 'indigo';
    };
  const [demoTheme, setDemoTheme] = useState(false);

  const themeDemo = () => {
    setDemoTheme((prevDemoTheme) => !prevDemoTheme);
  };

  const themeStyle = {
    backgroundColor: demoTheme ? '#FF00FF' : 'inherit',
  };

  return (
    <ThemeDiv theme={themeStyle}>
      <ToggleSwitch
        OutsideText
        OutsideLeft=""
        OutsideRight="Click Me"
        onChange={themeDemo}
        Color={getControlColor()} 
      />
    </ThemeDiv>
  );
};

export default ThemeSwitch;
