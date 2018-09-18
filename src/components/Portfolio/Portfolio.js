import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Portfolio.css'
import { Link } from 'react-router-dom';

function Portfolio(){
    return (
        <section>
            <Grid>
                <h2 className="text-center text-uppercase text-secondary mb-0">PORTFOLIO</h2>
                <hr className="separator"></hr>
                <Row className="show-grid">
                    <Col xs={6} lg={4}>
                        <div>
                            <Link to="/AISimulation/" target="_self">HOLA</Link>
                        </div>
                    </Col>
                    <Col xs={6} lg={4}>
                        <div>
                            HOLA
                        </div>
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

export default Portfolio;