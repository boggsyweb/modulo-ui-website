import styled from '@emotion/styled'
import Layout from '../../components/Layout';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SVGIcons } from '../../components/SVGIcons';
import { useState } from 'react';

const CategoryContainer = styled.div`
border: 1px solid gray;
border-radius: 5px;
padding: 1rem;
margin: 1.3em 0;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
  margin: 2em 0;
`;

const SVGDetail = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  text-align: center;
  padding: .5em;
  width: 5em;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background-color: #9244ff50;
  }
  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #01FFFF50;
    }
  }
  & svg {
    width: 3.5em;
    height: 3.5em;
    margin: 0 auto;
  }
  & p {
    font-size: .8rem;
  }
`;
const SuccessMessage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #9244ff;
  padding: 1em .3em;
  color: white;
  border-radius: 3px;
  font-size: .9rem;

  @media (prefers-color-scheme: dark) {
    background-color: #01FFFF;
    color: #333333
  }
`;

const SVGLibrary = () => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const handleCopy = (name: string) => {
    setCopiedIcon(name);
    setTimeout(() => setCopiedIcon(null), 1500);
  };

  const iconsByCategory: { [category: string]: JSX.Element[] } = {};

  SVGIcons.forEach((iconObject) => {
    const { name, icon, category } = iconObject;
    
    if (Array.isArray(category)) {
        category.forEach((cat) => {
          if (!iconsByCategory[cat]) {
            iconsByCategory[cat] = [];
          }

          iconsByCategory[cat].push(
            <SVGDetail key={name}>
              <CopyToClipboard text={name} onCopy={() => handleCopy(name)}>
                <div>
                  {icon}
                  <p>{name}</p>
                </div>
              </CopyToClipboard>
              {copiedIcon === name && (
                <SuccessMessage key={`success-${name}`}>{copiedIcon && <span>{name} Copied</span>}</SuccessMessage>
              )}
            </SVGDetail>
          );
        });
      }
    });

  return (
    <Layout>
      <section>
        <h1>SVG Icon Library</h1>
        <h2>These SVG icons can be used in the Button, ButtonGroup, and IconButton components. Enter the name of the icon as the 'IconType' prop.</h2>
        <h3>Click on the icon to copy the name.</h3>
      {Object.entries(iconsByCategory).map(([category, icons]) => (
        <CategoryContainer key={category}>
          <h4>{category}</h4>
          <IconContainer>{icons}</IconContainer>
        </CategoryContainer>
      ))}
    </section>
    </Layout>
  );
};

export default SVGLibrary;
