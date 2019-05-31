import React from "react";
import {Col, Row} from "react-bootstrap";
import caracsImg from "../../assets/caracs.png";
import styled from "styled-components";

const Style = styled.div`

    padding-top: 50px;
    padding-bottom: 50px;

    .caracImg {
        width: 90px;
        height: 90px;
    }
    
    .carac-title {
        font-family: Roboto-Black, sans-serif;
        font-size: 22px;
        width: 90px;
        text-align: center;
    }
`;

class Caracs extends React.Component {
    render() {
        return (
            <Style>
                <div className="d-flex justify-content-center">
                    <Row className="d-flex w-75 justify-content-between">
                        <Col>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <img src={caracsImg} alt="seance_live" className="caracImg"/>
                                <div className="mt-4 carac-title">
                                    Séances en live
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Style>
        )
    }
}

export default Caracs;
