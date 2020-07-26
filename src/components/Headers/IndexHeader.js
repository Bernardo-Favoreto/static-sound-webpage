/*eslint-disable*/
import React from "react";

// reactstrap components
import{
  Container,
  Card,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";
// core components
//import { Container } from "reactstrap";
// core components
import soundfile from "../../assets/sounds/teste.ogg";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../assets/css/now-ui-kit.css';
import '../../assets/css/custom.css';
import transparente from '../../assets/img/transparente.png'


function IndexHeader() {
  let pageHeader = React.createRef();

  const Player = () => (
    <AudioPlayer
    src= {soundfile}
    />
  )

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/teste.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-upper brand">
            <img
              alt="..."
              className="header-image"
              src={require("assets/img/transparente.png")}
            ></img>
            <h1 className="h1-seo">Uma frase aqui</h1>
            <h3>Outra frase</h3>
          </div>
        <Card style={{height: "100rem"}}>
          <CardBody>Testando um simples card.</CardBody>
        </Card>
          <div>
            <Player/>
          </div>
          <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
