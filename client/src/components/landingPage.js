import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

// import ModalForm from 'mdbootstrap';

class landingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [],};
    }

    callAPI() {
        fetch('/users')
            .then(res => res.json())
            .then((data) => this.setState({apiResponse: data}))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
        <div >
            <Grid className = 'landing-grid'>
                <Cell col={12}>
                    <div className='banner-text'>
                        <div className = 'user-info'>
                        <table className="table table-hover">
                            <tbody>
                            {this.state.apiResponse.map(member =>
                            <tr key={member.id}>
                                <td>{member.firstname} </td>
                                <td>{member.lastName}</td>
                                <td>{member.email}</td>
                                <td>
                                    <Link to={"/profile/"+member.uuid}><Button>PROFILE</Button></Link>
                                </td>
                                <td>
                                    <Link to={"/test_page/"+member.uuid+"/edit"}><Button>EDIT</Button></Link>
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                        </div>
                        {/* <div class="container">
                        <table class="table table-fixed">
                            <thead>
                            <tr>
                                <th class="col-xs-3">First Name</th>
                                <th class="col-xs-3">Last Name</th>
                                <th class="col-xs-6">E-mail</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.apiResponse.map(member =>
                            <tr>
                                <td class="col-xs-3">{member.firstname}</td>
                                <td class="col-xs-3">{member.lastName}</td>
                                <td class="col-xs-6">{member.email}</td>
                                <td>
                                    <Link to={"/profile/"+member.uuid}><Button>PROFILE</Button></Link>
                                </td>
                                <td>
                                    <Link to={"/test_page/"+member.uuid+"/edit"}><Button>EDIT</Button></Link>
                                </td>
                            </tr>
                            )}</tbody>
                        </table>
                        </div> */}

                    </div>

                </Cell>
            </Grid>
        </div>
        );
    }
}

export default landingPage;