import React from 'react';
import { Button, Col, Glyphicon, Grid, Input, Row } from 'react-bootstrap';

const Options = React.createClass({
    propTypes: {
        onClose: React.PropTypes.func.isRequired
    },

    render () {
        return (
            <Grid>
                <Row style={{marginTop: '10%'}}>
                    <Col xs={4} xsOffset={4}>
                        <Input addonAfter={<Glyphicon glyph="user"/>} label="Nickname" type="text"/>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <Input addonAfter={<Glyphicon glyph="music"/>}
                            label="Music"
                            max="100"
                            min="0"
                            step="1"
                            type="range"
                        />
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <Input addonAfter={<Glyphicon glyph="volume-up"/>}
                            label="Sounds"
                            max="100"
                            min="0"
                            step="1"
                            type="range"
                        />
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
