import React from 'react';
import { Button, Col, Glyphicon, Grid, Image, ProgressBar, Row } from 'react-bootstrap';

import CHARACTERS from '../constants/characters.js';

const playersLobby = React.createClass({
    propTypes: {
        onCancel: React.PropTypes.func.isRequired,
        onStart: React.PropTypes.func.isRequired
    },

    getInitialState () {
        return {
            selectedCharacter: CHARACTERS[0]
        };
    },

    previousCharacter () {
        let selectedCharacterIndex = CHARACTERS.indexOf(this.state.selectedCharacter);

        if (selectedCharacterIndex === 0) {
            this.setState({
                selectedCharacter: CHARACTERS[CHARACTERS.length - 1]
            });

            return;
        }

        this.setState({
            selectedCharacter: CHARACTERS[selectedCharacterIndex - 1]
        });
    },

    nextCharacter () {
        let selectedCharacterIndex = CHARACTERS.indexOf(this.state.selectedCharacter);

        if (selectedCharacterIndex === CHARACTERS.length - 1) {
            this.setState({
                selectedCharacter: CHARACTERS[0]
            });

            return;
        }

        this.setState({
            selectedCharacter: CHARACTERS[selectedCharacterIndex + 1]
        });
    },

    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={4} xsOffset={4}>
                        <Button bsStyle="primary" onClick={this.previousCharacter}>
                            <Glyphicon glyph="arrow-left"/>
                        </Button>
                        <Image rounded src={`./assets/characters/${this.state.selectedCharacter.asset}`}/>
                        <Button bsStyle="primary" onClick={this.nextCharacter}>
                            <Glyphicon glyph="arrow-right"/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col style={{textAlign: 'center'}} xs={4} xsOffset={4}>
                            <span>{'Acceleration'}</span>
                        </Col>
                    </Row>
                    <Col xs={4} xsOffset={4}>
                        <ProgressBar bsStyle="success" now={this.state.selectedCharacter.acceleration / 1 * 100}/>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col style={{textAlign: 'center'}} xs={4} xsOffset={4}>
                            <span>{'Max Speed'}</span>
                        </Col>
                    </Row>
                    <Col xs={4} xsOffset={4}>
                        <ProgressBar bsStyle="success" now={this.state.selectedCharacter.maxSpeed / 8 * 100}/>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col style={{textAlign: 'center'}} xs={4} xsOffset={4}>
                            <span>{`Size Category: ${this.state.selectedCharacter.sizeCategory}`}</span>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col style={{marginTop: 10}} xs={4} xsOffset={4}>
                        <Button block bsStyle="success" onClick={this.props.onStart.bind(null, this.state.selectedCharacter)}>
                            <span><Glyphicon glyph="play"/> {'Start'}</span>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginTop: 10}} xs={4} xsOffset={4}>
                        <Button block bsStyle="primary" onClick={this.props.onCancel}>
                            <span><Glyphicon glyph="remove"/> {'Cancel'}</span>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default playersLobby;
