import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class profile extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [],};
    }

    callAPI() {
        fetch('/user')
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
                    {this.state.apiResponse.map(info => (
                    <img 
                        src={info.picture.large}
                        alt='avatar'
                        className='avatar-img'
                        key='20'
                    />
                    ))}
                    <div className='banner-text'>
                        <div className = 'user-info'>
                            {this.state.apiResponse.map(info => (
                                <h2 key={info.name.first}>{info.name.first} {info.name.last}</h2>
                            ))}
                        </div>
                        <hr />
                        <div className = 'user-contacts'>
                            {this.state.apiResponse.map((info, idx) => (
                                <div className='prop-list' key='9090'>
                                    <ul>
                                        <p>CONTACT</p>
                                        <li id='contact-email' key="1"><strong>Email:</strong> {info.email}</li>
                                        <li id='contact-home' key="2"><strong>Home:</strong> {info.phone}</li>
                                        <li id='contact-cell' key="3"><strong>Cell:</strong> {info.cell}</li>
                                        <p>LOCATION</p>
                                        <li id='contact-address' key="4"><strong>Address:</strong> {info.location.street}</li>
                                        <li id='contact-city' key="5"><strong>City:</strong> {info.location.city}</li>
                                        <li id='contact-state' key="6"><strong>State/Province:</strong> {info.location.state}</li>
                                        <li id='contact-post' key="7"><strong>Postal Code:</strong> {info.location.postcode}</li>
                                        <li id='contact-nat' key="8"><strong>Country:</strong> {info.nat}</li>
                                        <p>PERSONAL</p>
                                        <li id='contact-gender' key="9"><strong>Gender:</strong> {info.gender}</li>
                                        <li id='contact-dob' key='9999'><strong>DOB:</strong> {info.dob.date}</li>
                                    </ul> 
                                </div>
                            ))}
                        </div>
                       

                    </div>

                </Cell>
            </Grid>
        </div>
        );
    }
}

export default profile;