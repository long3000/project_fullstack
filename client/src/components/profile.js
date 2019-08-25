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
        // fetch('/user')
        //     .then(data => data.json())
        //     .then(userInfo => this.setState({apiResponse: userInfo}))
        this.callAPI();
    }

    render() {
        return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className = 'landing-grid'>
                <Cell col={12}>
                    {this.state.apiResponse.map(info => (
                    <img 
                        src={info.picture.large}
                        alt='avatar'
                        className='avatar-img'
                    />
                    ))}
                    <div className='banner-text'>
                        <div className = 'user-info'>
                            {this.state.apiResponse.map(info => (
                                <h2>{info.name.first} {info.name.last}</h2>
                            ))}
                        </div>
                        <hr />
                        <div className = 'user-contacts'>
                            {this.state.apiResponse.map(info => (
                                <div>
                                    <p className='contact-email'><strong>Email:</strong> {info.email}</p>
                                    <p className='contact-home'><strong>Home:</strong> {info.phone}</p>
                                    <p className='contact-cell'><strong>Cell:</strong> {info.cell}</p>
                                </div>
                            ))}
                        </div>
                        <div className="social-links">

                            {/* Email button */}
                            <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-envelope-square' aria-hidden='true' />
                            </a>

                            {/* LinkedIn button */}
                            <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-linkedin-square' aria-hidden='true' />
                            </a>
                        </div>
                    </div>

                </Cell>
            </Grid>
        </div>
        );
    }
}

export default profile;