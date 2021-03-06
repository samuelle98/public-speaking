import React, { Component } from 'react';
import { Grid, PageHeader, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import InfoForm from '../components/infoform/InfoForm';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
    }

    componentDidMount() {
        let ref = this.props.database.ref();
        ref.on('value', snapshot => {
            let students = snapshot.val().students;
            if(students) {
                let messageArray = Object.values(students);
                this.setState({ messages: messageArray });
            }
        });
    }

    renderCurrentMessages() {
        return (
            this.state.messages.map((item, index) => (
                <ListGroupItem key={index}>{item.message}</ListGroupItem>
            ))
        );
    }

    render() {
        return (
            <Grid>
                <PageHeader>Family Planning: Planning for the Future</PageHeader>
                <InfoForm database={this.props.database}/>
                <div style={{ paddingTop: 15 }}>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">What the People Have to Say</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <ListGroup>
                                {this.renderCurrentMessages()}
                            </ListGroup>
                        </Panel.Body>
                    </Panel>
                </div>
            </Grid>
        )
    }
}
