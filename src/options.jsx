import React from 'react';
import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

const Options = React.createClass({
    propTypes: {
        onClose: React.PropTypes.func.isRequired
    },

    render () {
        return (
            <Grid>
                <Row style={{marginTop: '10%'}}>
                    <Col xs={4} xsOffset={4}>
                        <span><Glyphicon glyph="music"/> {'Music'}</span>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <span><Glyphicon glyph="volume-up"/> {'Sounds'}</span>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <Button block bsStyle="primary" onClick={this.props.onClose}>
                            <span><Glyphicon glyph="arrow-left"/> {'Back'}</span>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Options;
