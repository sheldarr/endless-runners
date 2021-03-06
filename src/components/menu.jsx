import {Button, Col, Glyphicon, Grid, ProgressBar, Row} from 'react-bootstrap';
import React from 'react';

const Menu = React.createClass({
    propTypes: {
        gameLoaded: React.PropTypes.bool.isRequired,
        loadingProgress: React.PropTypes.number.isRequired,
        loadingResource: React.PropTypes.string.isRequired,
        optionsSelected: React.PropTypes.func.isRequired,
        startGameSelected: React.PropTypes.func.isRequired
    },

    close () {
        // window.close();
    },

    render () {
        return (
            <Grid>
                <Row style={{marginTop: '5%'}}>
                    <Col xs={4} xsOffset={4}>
                        <Button
                            block
                            bsStyle="success"
                            disabled={!this.props.gameLoaded}
                            onClick={this.props.startGameSelected}
                        >
                            <span><Glyphicon glyph="play"/> {'Start game'}</span>
                        </Button>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <Button block bsStyle="primary" onClick={this.props.optionsSelected}>
                            <span><Glyphicon glyph="cog"/> {'Options'}</span>
                        </Button>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <Button block bsStyle="danger" onClick={this.close}>
                            <span><Glyphicon glyph="off"/> {'Quit'}</span>
                        </Button>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <Row>
                            <Col style={{textAlign: 'center'}} xs={12}>
                                <span>{this.props.loadingResource}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <ProgressBar bsStyle="success" now={this.props.loadingProgress}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Menu;
