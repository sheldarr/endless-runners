import React from 'react';
import { Button, Col, Glyphicon, Grid, Input, Row } from 'react-bootstrap';

const Options = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        onClose: React.PropTypes.func.isRequired,
        options: React.PropTypes.shape({
            nickname: React.PropTypes.string.isRequired,
            music: React.PropTypes.number.isRequired,
            sounds: React.PropTypes.number.isRequired
        }).isRequired
    },

    nicknameChanged (event) {
        this.props.onChange({
            nickname: event.target.value,
            music: this.props.options.music,
            sounds: this.props.options.sounds
        });
    },

    musicChanged (event) {
        this.props.onChange({
            nickname: this.props.options.nickname,
            music: event.target.value,
            sounds: this.props.options.sounds
        });
    },

    soundsChanged (event) {
        this.props.onChange({
            nickname: this.props.options.nickname,
            music: this.props.options.music,
            sounds: event.target.value
        });
    },

    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={4} xsOffset={4}>
                        <Input
                            addonAfter={<Glyphicon glyph="user"/>}
                            label="Nickname"
                            onChange={this.nicknameChanged}
                            type="text"
                            value={this.props.options.nickname}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} xsOffset={4}>
                        <Input addonAfter={<Glyphicon glyph="music"/>}
                            label="Music"
                            max="100"
                            min="0"
                            onChange={this.musicChanged}
                            step="1"
                            type="range"
                            value={this.props.options.music}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} xsOffset={4}>
                        <Input addonAfter={<Glyphicon glyph="volume-up"/>}
                            label="Sounds"
                            max="100"
                            min="0"
                            onChange={this.soundsChanged}
                            step="1"
                            type="range"
                            value={this.props.options.sounds}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginTop: 10}} xs={4} xsOffset={4}>
                        <Button block bsStyle="success" onClick={this.props.onClose}>
                            <span><Glyphicon glyph="floppy-disk"/> {'Save'}</span>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginTop: 10}} xs={4} xsOffset={4}>
                        <Button block bsStyle="primary" onClick={this.props.onClose}>
                            <span><Glyphicon glyph="remove"/> {'Cancel'}</span>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Options;
