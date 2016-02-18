import React from 'react';
import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

const gui = global.window.nwDispatcher.requireNwGui();
const window = gui.Window.get();

const Menu = React.createClass({
    propTypes: {
        onStartGame: React.PropTypes.func.isRequired
    },

    close () {
        window.close();
    },

    render () {
        return (
            <Grid>
                <Row style={{marginTop: '10%'}}>
                    <Col xs={4} xsOffset={4}>
                        <Button block bsStyle="success" onClick={this.props.onStartGame}>
                            <span><Glyphicon glyph="play"/> {'Start game'}</span>
                        </Button>
                    </Col>
                </Row>
                <Row style={{marginTop: 20}}>
                    <Col xs={4} xsOffset={4}>
                        <Button block bsStyle="primary">
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
            </Grid>
        );
    }
});

export default Menu;
