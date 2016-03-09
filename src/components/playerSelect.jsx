import {Button, Col, Glyphicon, Image, ProgressBar, Row} from 'react-bootstrap';
import CHARACTERS from '../constants/characters.js';
import PIXI from 'pixi.js';
import React from 'react';
import playersFactory from '../factories/playersFactory.js';


const PlayerSelect = React.createClass({
    propTypes: {
        gameState: React.PropTypes.object.isRequired,
        playerIndex: React.PropTypes.number.isRequired
    },

    getInitialState () {
        return {
            selectedCharacter: CHARACTERS[0]
        };
    },

    componentDidMount () {
        this.updatePlayerCharacter();

        this.setState(this.state);
    },

    updatePlayerCharacter () {
        this.props.gameState.players[this.props.playerIndex] = playersFactory.create(this.props.playerIndex,
            new PIXI.Point(128, 128),
            this.state.selectedCharacter
        );
    },

    previousCharacter () {
        const selectedCharacterIndex = CHARACTERS.indexOf(this.state.selectedCharacter);

        if (selectedCharacterIndex === 0) {
            this.setState({
                selectedCharacter: CHARACTERS[CHARACTERS.length - 1]
            }, () => {
                this.updatePlayerCharacter();
            });

            return;
        }

        this.setState({
            selectedCharacter: CHARACTERS[selectedCharacterIndex - 1]
        }, () => {
            this.updatePlayerCharacter();
        });
    },

    nextCharacter () {
        const selectedCharacterIndex = CHARACTERS.indexOf(this.state.selectedCharacter);

        if (selectedCharacterIndex === CHARACTERS.length - 1) {
            this.setState({
                selectedCharacter: CHARACTERS[0]
            }, () => {
                this.updatePlayerCharacter();
            });

            return;
        }

        this.setState({
            selectedCharacter: CHARACTERS[selectedCharacterIndex + 1]
        }, () => {
            this.updatePlayerCharacter();
        });
    },

    render () {
        if (!this.props.gameState.players[this.props.playerIndex]) {
            return (
                <Col xs={3}>
                    <Row style={{height: '50%'}}>
                        <Col xs={4} xsOffset={4}>
                            <Image rounded src="./assets/xbox-buttons/a.png"/>
                        </Col>
                    </Row>
                </Col>
            );
        }

        return (
            <Col xs={3}>
                <Row>
                    <Col xs={4}>
                        <Button bsStyle="primary" onClick={this.previousCharacter}>
                            <Glyphicon glyph="arrow-left"/>
                        </Button>
                    </Col>
                    <Col xs={4}>
                        <Image rounded src={`./assets/characters/${this.state.selectedCharacter.asset}`}/>
                    </Col>
                    <Col xs={4}>
                        <Button bsStyle="primary" onClick={this.nextCharacter}>
                            <Glyphicon glyph="arrow-right"/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <strong>{this.state.selectedCharacter.name}</strong>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <span>{'Acceleration'}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <ProgressBar bsStyle="warning" now={this.state.selectedCharacter.acceleration / 1 * 100}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <span>{'Inersity'}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <ProgressBar bsStyle="danger" now={this.state.selectedCharacter.inersity / 1 * 100}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'center'}}>
                        <span>{'Max Speed'}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <ProgressBar bsStyle="success" now={this.state.selectedCharacter.maxSpeed / 8 * 100}/>
                    </Col>
                </Row>
            </Col>
        );
    }
});

export default PlayerSelect;
