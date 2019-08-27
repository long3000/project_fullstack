import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import { Link } from 'react-router-dom';

class submitUser extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    callAPI() {
        fetch('/user')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    apiResponse: data.map(info =>({
                        uuid : info.login.uuid,
                        gender : info.gender,
                        firstname : info.name.first,
                        lastname : info.name.last,
                        title : info.name.title,
                        email : info.email,
                        homephone: info.phone,
                        cellphone: info.cell,
                        dob : info.dob.date,
                        street: info.location.street,
                        city: info.location.city,
                        state: info.location.state,
                        postcode: info.location.postcode,
                        country: info.nat,
                        picture: info.picture.large
                    }))
                })
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    handleSubmit(event){
        event.preventDefault()
        fetch('/user/new', {
          method: 'POST',  
          body: JSON.stringify(this.state.apiResponse),  
          headers:{
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
      alert('Added this user!');
    }



    render() {
        function refreshPage() {
            window.location.reload(false);
          }
        return (
        <div >
            <Grid className = 'landing-grid'>
                <Cell col={12}>
                    {this.state.apiResponse.map(info => (
                    <img 
                        src={info.picture}
                        alt='avatar'
                        className='avatar-img'
                        key='20'
                    />
                    ))}
                    <div className='banner-text'>
                        <div className = 'user-info'>
                            {this.state.apiResponse.map(info => (
                                <h2 key={info.firstname}>{info.firstname} {info.lastname}</h2>
                            ))}
                        </div>
                        <hr />
                        <div className = 'user-contacts'>
                            {this.state.apiResponse.map((info, idx) => (
                                <div className='prop-list' key='9090'>
                                    <ul>
                                        <p>CONTACT</p>
                                        <li id='contact-email' key="1"><strong>Email:</strong> {info.email}</li>
                                        <li id='contact-home' key="2"><strong>Home:</strong> {info.homephone}</li>
                                        <li id='contact-cell' key="3"><strong>Cell:</strong> {info.cellphone}</li>
                                        <p>LOCATION</p>
                                        <li id='contact-address' key="4"><strong>Address:</strong> {info.street}</li>
                                        <li id='contact-city' key="5"><strong>City:</strong> {info.city}</li>
                                        <li id='contact-state' key="6"><strong>State/Province:</strong> {info.state}</li>
                                        <li id='contact-post' key="7"><strong>Postal Code:</strong> {info.postcode}</li>
                                        <li id='contact-nat' key="8"><strong>Country:</strong> {info.country}</li>
                                        <p>PERSONAL</p>
                                        <li id='contact-gender' key="9"><strong>Gender:</strong> {info.gender}</li>
                                        <li id='contact-dob' key='9999'><strong>DOB:</strong> {info.dob}</li>
                                    </ul> 
                                </div>
                            ))}
                        </div>
                        <div className="button-submit">
                            <form
                                method="post"
                                onSubmit={event => this.handleSubmit(event)}>
                                <Button raised colored type='submit'>Submit</Button>
                            </form>
                            <Button raised colored onClick={refreshPage} className='random-but'>Randomize</Button>
                            
                        </div>
                       
                    </div>

                </Cell>
            </Grid>
        </div>
        );
    }
}

export default submitUser;