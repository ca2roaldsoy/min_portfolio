import React from 'react';
import MyProfileImg from "../../assets/myprofile_image.jpg";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Home() {
    return (
        <Row>
        <Col lg={4}>
          <h1>My Profile</h1>
          <Image
          src={MyProfileImg}
          alt="profile of me"
          fluid
          className="profile__img"
        /> 
        </Col>
        <Col lg={8}>
            <ListGroup className="info">
                <h5 className="info__title">Etternavn</h5>
                <ListGroupItem className="info__title--text">ROALDSØY</ListGroupItem>
                <h5 className="info__title">Fornavn</h5>
                <ListGroupItem className="info__title--text">CATO</ListGroupItem>
                <h5 className="info__title">Nasjonalitet</h5>
                <ListGroupItem className="info__title--text">NORSK NORWEGIAN</ListGroupItem>
                <h5 className="info__title">Fødselsdato</h5>
                <ListGroupItem className="info__title--text">17 AUG 87</ListGroupItem>
                <Col lg={2}>
                    <h5 className="info__title">Kjønn</h5>
                    <ListGroupItem className="info__title--text">M</ListGroupItem>
                </Col>
                <Col lg={6}>
                    <h5 className="info__title">Fødested</h5>
                    <ListGroupItem className="info__title--text">STAVANGER, NOR</ListGroupItem>
                </Col>
            </ListGroup>

        </Col>
        </Row>
    )
}

export default Home