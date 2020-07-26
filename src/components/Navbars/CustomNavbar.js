import React from "react";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://www.creative-tim.com/"
              target="_blank"
              id="navbar-brand"
            >
              ANGELIKA FAVORETTO
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Esses estilos pertencem a Invision. Código por Creative Tim.
            </UncontrolledTooltip>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
