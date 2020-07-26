/*eslint-disable*/
import React from "react";

// reactstrap components
import{
  Container,
  Card,
  CardImg,
  CardBody,
  Row,
  Col,
} from "reactstrap";


// core components
//import { Container } from "reactstrap";
// core components
import mp3file from "../../assets/sounds/teste.mp3";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../assets/css/now-ui-kit.css';
import '../../assets/css/custom.css';
import transparente from '../../assets/img/transparente-cropped.png'
import logo from '../../assets/img/logo-angelika-favorreto-pb.png'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

const links = [
  {
    icon: () => <FaInstagram className="fa-icons" />, 
    url: 'http://instagram.com/angelikafavoretto' 
  },
  {
    icon: () => <FaFacebookF className="fa-icons" />, 
    url: 'https://www.facebook.com/angelikafavoretto.terapeuta' 
  },
  {
    icon: () => <FaYoutube className="fa-icons" />, 
    url: 'https://www.youtube.com/user/angelika2558' 
  },
  {
    icon: () => <FaTelegramPlane className="fa-icons" />, 
    url: 'https://t.me/angelikafavoretto' 
  }
]

function IndexHeader() {
  let pageHeader = React.createRef();

  const Player = () => (
    <AudioPlayer
    src= {mp3file}
    autoPlay="true"
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
      <div className="page-header clear-filter" filter-color="mycolor">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/fundo.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <Row>
            <Col>
              <Card className="custom-card">
                <div className="card-center">
                  <CardImg className="card-img"
                                alt="..."
                                src={transparente}>        
                  </CardImg>
                  <CardImg className="card-logo" onClick ={ () => location.href = "https://angelikafavoretto.com.br"}
                      alt="..."
                      src={logo}
                      >
                  </CardImg>
                  <CardBody className="custom-card-body">
                    <h3>Novo Eu . Novo Nós . Novo Mundo</h3>
                  </CardBody>
                  <Container style={{height: "auto"}}>
                    <Row className="icons-row">
                      {
                        links.map( (link, index) => {
                          return (
                            <Col xs={3}>
                              <button onClick={ () => location.href = (link.url)} className='social-media-link' >
                                { link.icon() }
                              </button> 
                            </Col>
                          )
                        })
                      }
                    </Row>
                  </Container>
                </div> 
              </Card>
            </Col>

          </Row>
          <div>
            <h4 style={{fontWeight: 500}}>MEDITAÇÃO</h4>
            <h5 style={{fontWeight: 500}}>Cura da Criança Interior</h5>
          </div>
          <div>
            <Player/>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
