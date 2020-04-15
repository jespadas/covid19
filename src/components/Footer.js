import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }, @jespadas</p>
      </Container>
    </footer>
  );
};

export default Footer;
