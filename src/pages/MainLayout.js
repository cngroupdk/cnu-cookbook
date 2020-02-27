import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import { AppNavbar } from "../components/AppNavbar/AppNavbar";
import { AppFooter } from "../components/AppFooter/AppFooter";

function MainLayout({ children }) {
  return (
    <Fragment>
      <AppNavbar />
      <Container>{children}</Container>
      <AppFooter />
    </Fragment>
  );
}

export { MainLayout };
