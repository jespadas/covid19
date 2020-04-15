import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <h1>COVID-19</h1>
        <ul>
          <li>
            <a href="https://jespadas.github.io/covid-19/">
              More info
            </a>
          </li>
          <li>
            <a href="https://github.com/jespadas">
              <FaGithub /> Github
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;