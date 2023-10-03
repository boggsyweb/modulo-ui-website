import { useState } from 'react';
import { ToggleSwitch } from 'modulo-ui';
import styled from '@emotion/styled';

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
  const [demoTheme, setDemoTheme] = useState(false);

  const themeDemo = () => {
    setDemoTheme((prevDemoTheme) => !prevDemoTheme);
  };

  const themeStyle = {
    backgroundColor: demoTheme ? '#F400DC' : 'inherit',
  };

  return (
    <ThemeDiv theme={themeStyle}>
      <ToggleSwitch
        OutsideText
        OutsideLeft=""
        OutsideRight="Click Me"
        onChange={themeDemo}
      />
    </ThemeDiv>
  );
};

export default ThemeSwitch;
