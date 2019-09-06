import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

// import ModalForm from 'mdbootstrap';

class landingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  apiResponse: [],
                        modal: false,
                        msg: '',
                        uuid: null
                    };
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    callAPI() {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then((data) => this.setState({apiResponse: data}))
            .catch(err => err);
    }

    deleteUser(id) {
        const data = {
            pid: id,
            fname: null
        };

        console.log(`Delete ${data.fname} at UUID: ${data.pid}`);

        fetch("/user/delete",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then((res) => {
                if(res.status >= 400) {throw new Error("Invalid response fron Server");}
                    return res;
            })
            .then((data) => {
                if(data === 'success') {this.setState({msg: "User has been removed!"}); }
                this.toggle();
                this.callAPI();
            }).catch((err) => {
                console.log(err)
            });
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div >
            <Grid className = 'landing-grid'>
                <Cell col={12}>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Confirmation</ModalHeader>
                    <ModalBody>
                        Confirm deletion of this account of ID: {this.state.uuid} ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.deleteUser(this.state.uuid)}>YES</Button>
                        <Button color="secondary" onClick={this.toggle}>CANCEL</Button>
                    </ModalFooter>
                </Modal>
                <Container className='listContainer'>
                {this.state.apiResponse.map(member => (
                        <tbody>
                            <th id='userid'>{member.id}</th>
                            <th>{member.firstname}</th>
                            <th>{member.lastName}</th>
                            <th>{member.email}</th>
                            <th><Button color="primary">Profile</Button></th> 
                            <th><Button color="info">Edit</Button></th>
                            <th><Button color="danger" onClick={(e)=>{this.toggle();this.setState({uuid: member.id })}} >Delete</Button></th>
                        </tbody>
                ))}
                </Container>
                </Cell>
            </Grid>
            </div>
        );
    }
}

export default landingPage;