import React from 'react';
import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

import PlayerSelect from './PlayerSelect.jsx';

const playersLobby = React.createClass({
    propTypes: {
        onCancel: React.PropTypes.func.isRequired,
        onStart: React.PropTypes.func.isRequired
    },

    render () {
        return (
            <Grid>
                <Row>
                    <PlayerSelect playerIndex={0}/>
                    <PlayerSelect playerIndex={1}/>
                    <PlayerSelect playerIndex={2}/>
                    <PlayerSelect playerIndex={3}/>
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
