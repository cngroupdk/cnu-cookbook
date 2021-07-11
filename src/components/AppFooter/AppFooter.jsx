import React from 'react';
import { Container } from 'react-bootstrap';

function AppFooter() {
  return (
    <Container as="footer" className="page-footer">
      <hr />
      <p>&copy; {new Date().getFullYear()} &middot; CN Group CZ s.r.o.</p>
    </Container>
  );
}

export default AppFooter;
