import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class profile extends Component {
    render() {
        return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className = 'landing-grid'>
                <Cell col={12}>
                    <img 
                        src='https://naibac.com/includes/agent_pictures/3652.jpg'
                        alt='avatar'
                        className='avatar-img'
                    />
                    <div className='banner-text'>
                        <h2 id='title'>First Name, Last Name</h2>

                        <hr />
                        <p>Email: email@domainsample.com</p>
                        <p>Number: 05-912-12382</p>
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