import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
const sgMail = require('@sendgrid/mail');

class testPage extends Component {

    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        
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
            picture: 'Loading ...',
            confirmEmail: 'empty'
        }
    }

    handleChange = (event) => {
        // this.setState({ username: event.target.value });
        const { target: { name, value }} = event;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch('/user/update', {
          method: 'POST',  
          body: JSON.stringify(this.state),  
          headers:{
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));

      alert('Updates Saved!');
    }

    componentDidMount() {
        fetch(`http://localhost:3000/user/${this.props.match.params.uuid}`)
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
                    postcode: results.postal,
                    country: results.country,
                    picture: results.picture
                })
            });
    }

    render() {
        return (
            <div>
                <Grid className = 'landing-grid'>
                <Cell col={12}>
                    <img 
                        src= {this.state.picture}
                        alt='avatar'
                        className='avatar-img'
                        key='20'
                    />
                    <div className = 'user-info'>
                       <h2 key='123'>{this.state.firstname} {this.state.lastname}</h2>
                   </div>
                   
                    <div className='banner-text-b'>
                    <div className="sub-container">
                        <div >
                            <label>First Name</label>
                            <div><input name="firstname" type="name" onChange={this.handleChange.bind(this)} id="name" placeholder={this.state.firstname}/></div>
                        </div>
                        <div >
                            <label>Last Name</label>
                            <div><input name = "lastname" type="address" onChange={this.handleChange.bind(this)} id="address" placeholder={this.state.lastname}/></div>
                            </div>
                        <div >
                            <label>Email</label>
                            <div><input name="email" type="email" onChange={this.handleChange.bind(this)} id="email" placeholder={this.state.email}/></div>
                            </div>
                        <div >
                            <label>Home #</label>
                            <div><input name="homephone" type="email" onChange={this.handleChange.bind(this)} id="homephone" placeholder={this.state.homephone}/></div>
                            </div>
                        <div >
                            <label>Cell #</label>
                            <div><input name="cellphone" type="email" onChange={this.handleChange.bind(this)} id="cellphone" placeholder={this.state.cellphone}/></div>
                            </div>
                        <div >
                            <label>Address</label>
                            <div><input name="address" type="email" onChange={this.handleChange.bind(this)} id="street" placeholder={this.state.street}/></div>
                            </div>
                        <div >
                            <label>City</label>
                            <div><input name="city" type="email" onChange={this.handleChange.bind(this)} id="city" placeholder={this.state.city}/></div>
                            </div>
                        <div >
                            <label>State</label>
                            <div><input name="state" type="text" onChange={this.handleChange.bind(this)} id="state" placeholder={this.state.state}/></div>
                            </div>
                        <div >
                            <label>Postcode</label>
                            <div><input name="postcode" type="text" onChange={this.handleChange.bind(this)} id="postcode" placeholder={this.state.postcode}/></div>
                            </div>
                        <div >
                            <label >Country Code</label>
                            <div><input name="country" type="text" onChange={this.handleChange.bind(this)} id="country" placeholder={this.state.country}/></div>
                            </div>
                        <div >
                            <label >Profile Image URL</label>
                            <div><input name="picture" type="text" onChange={this.handleChange.bind(this)} id="picture" placeholder={this.state.picture}/></div>
                            </div>
                        <div >
                            <label >CONFIRMATION EMAIL ADDRESS</label>
                            <div><input name="confirmEmail" type="text" onChange={this.handleChange.bind(this)} id="confirmEmail" placeholder='Your own email'/></div>
                            </div>
                        <div>
                            <form
                                method="post"
                                onSubmit={event => this.handleSubmit(event)}>
                                <Button raised colored type='submit'>Save changes</Button>
                            </form>
                        </div>
                        
                    </div>
                    <div className="sub-container">
                        <ul>
                            <li><strong>Gender : </strong>{this.state.gender}</li>
                            <li><strong>Firstname : </strong>{this.state.firstname}</li>
                            <li><strong>Lastname : </strong>{this.state.lastname}</li>
                            <li><strong>Title : </strong>{this.state.title}</li>
                            <li><strong>Email : </strong>{this.state.email}</li>
                            <li><strong>Homephone: </strong>{this.state.homephone}</li>
                            <li><strong>Cellphone: </strong>{this.state.cellphone}</li>
                            <li><strong>Date of Birth : </strong>{this.state.dob}</li>
                            <li><strong>Street: </strong>{this.state.street}</li>
                            <li><strong>City: </strong>{this.state.city}</li>
                            <li><strong>State: </strong>{this.state.state}</li>
                            <li><strong>Postcode: </strong>{this.state.postcode}</li>
                            <li><strong>Country: </strong>{this.state.country}</li>
                        </ul>
                    </div>
                    </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default testPage;