import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';

class detailsPage extends Component {
    constructor() {
        super();

        this.state = {
            uuid : 'Loading ...',
            gender : 'Loading ...',
            firstname : 'Loading ...',
            lastname : 'Loading ...',
            title : 'Loading ...',
            email : 'Loading ...',
            homephone: 'Loading ...',
            cellphone: 'Loading ...',
            dob : 'Loading ...',
            street: 'Loading ...',
            city: 'Loading ...',
            state: 'Loading ...',
            postcode: 'Loading ...',
            country: 'Loading ...',
            picture: 'Loading ...'
        }
    }

componentDidMount() {
    fetch(`/user/${this.props.match.params.uuid}`)
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            this.setState({
                uuid : results.uuid,
                gender : results.gender,
                firstname : results.firstname,
                lastname : results.lastname,
                title : results.title,
                email : results.email,
                homephone: results.homephone,
                cellphone: results.cellphone,
                dob : results.dob,
                street: results.street,
                city: results.city,
                state: results.state,
                postcode: results.postcode,
                country: results.country,
                picture: results.picture
            })
        });
}

    render() {
        return (
            <div >
            <Grid className = 'landing-grid'>
                <Cell col={12}>
                    
                    <img 
                        src={this.state.picture}
                        alt='avatar'
                        className='avatar-img'
                        key='20'
                    />
                    )}
                    <div className='banner-text'>
                        <div className = 'user-info'>
                            <h2 key={this.state.firstname}>{this.state.firstname} {this.state.lastname}</h2>
                            )}
                        </div>
                        <hr />
                        <div className = 'user-contacts'>

                                <div className='prop-list' key='9090'>
                                    <ul>
                                        <p>CONTACT</p>
                                        <li id='contact-email' key="1"><strong>Email:</strong> {this.state.email}</li>
                                        <li id='contact-home' key="2"><strong>Home:</strong> {this.state.homephone}</li>
                                        <li id='contact-cell' key="3"><strong>Cell:</strong> {this.state.cellphone}</li>
                                        <p>LOCATION</p>
                                        <li id='contact-address' key="4"><strong>Address:</strong> {this.state.street}</li>
                                        <li id='contact-city' key="5"><strong>City:</strong> {this.state.city}</li>
                                        <li id='contact-state' key="6"><strong>State/Province:</strong> {this.state.state}</li>
                                        <li id='contact-post' key="7"><strong>Postal Code:</strong> {this.state.postcode}</li>
                                        <li id='contact-nat' key="8"><strong>Country:</strong> {this.state.country}</li>
                                        <p>PERSONAL</p>
                                        <li id='contact-gender' key="9"><strong>Gender:</strong> {this.state.gender}</li>
                                        <li id='contact-dob' key='9999'><strong>DOB:</strong> {this.state.dob}</li>
                                    </ul> 
                                </div>
                            )}
                        </div>
                        <div className="button-submit">
                            <form
                                method="post"
                                onSubmit={event => this.handleSubmit(event)}>
                                <Button raised colored type='submit'>EDIT</Button>
                            </form>
                        </div>
                        <div className="social-links">

                            {/* Email button */}
                            {/* <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-envelope-square' aria-hidden='true' />
                            </a> */}

                            {/* LinkedIn button */}
                            {/* <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-linkedin-square' aria-hidden='true' />
                            </a> */}
                        </div>
                    </div>

                </Cell>
            </Grid>
        </div>
        );
    
    }
}

export default detailsPage;