import React from 'react';
import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

const playersLobby = React.createClass({
    propTypes: {
        onCancel: React.PropTypes.func.isRequired,
        onStart: React.PropTypes.func.isRequired
    },

    render () {
        return (
            <Grid>
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
