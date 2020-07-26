/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/angelikafavoretto"
                target="_blank"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
              >
                FACEBOOK
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/angelikafavoretto"
                target="_blank"
              >
                YOUTUBE
              </a>
            </li>
            <li>
              <a
                href="https://telegram.com"
                target="_blank"
              >
                TELEGRAM
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
