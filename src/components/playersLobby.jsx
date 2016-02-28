import React from 'react';
import { Button, Col, Glyphicon, Grid, Image, Row } from 'react-bootstrap';

const playersLobby = React.createClass({
    propTypes: {
        onCancel: React.PropTypes.func.isRequired,
        onStart: React.PropTypes.func.isRequired
    },

    getInitialState () {
        return {
            characters: [
                'blob',
                'dragon',
                'ettercap',
                'goblin',
                'mage',
                'player',
                'skeleton',
                'spider',
                'tortoise',
                'wasp'
            ],
            selectedCharacter: 'player'
        };
    },

    previousCharacter () {
        let selectedCharacterIndex = this.state.characters.indexOf(this.state.selectedCharacter);

        if (selectedCharacterIndex === 0) {
            this.setState({
                selectedCharacter: this.state.characters[this.state.characters.length - 1]
            });

            return;
        }

        this.setState({
            selectedCharacter: this.state.characters[selectedCharacterIndex - 1]
        });
    },

    nextCharacter () {
        let selectedCharacterIndex = this.state.characters.indexOf(this.state.selectedCharacter);

        if (selectedCharacterIndex === this.state.characters.length - 1) {
            this.setState({
                selectedCharacter: this.state.characters[0]
            });

            return;
        }

        this.setState({
            selectedCharacter: this.state.characters[selectedCharacterIndex + 1]
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
                        <Image rounded src={`./assets/characters/${this.state.selectedCharacter}.png`}/>
                        <Button bsStyle="primary" onClick={this.nextCharacter}>
                            <Glyphicon glyph="arrow-right"/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginTop: 10}} xs={4} xsOffset={4}>
                        <Button block bsStyle="success" onClick={this.props.onStart}>
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
