import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
      <Layout fixedHeader>
          <Header className='header-color' title="User Profile" scroll>
              <Navigation>
                  <Link to ="/profile">About Me</Link>
                  <Link to ="/profile_edit">Edit Profile</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/profile">About Me</a>
                  <a href="/profile_edit">Edit Profile</a>
              </Navigation>
          </Drawer>
          <Content>
            <div className = 'page-content'>
              <Main />
              <p>
                Edit main.js in ./src/components/main.js to tie all routes
              </p>
            </div>
          </Content>
      </Layout>
  </div>
    );
  }
}


export default App;
