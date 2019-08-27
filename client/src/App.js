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
                  <Link to ="/">Homepage</Link>
                  <Link to ="/submit_user">Add New User</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">Homepage</a>
                  <a href="/submit_user">Add New User</a>
              </Navigation>
          </Drawer>
          <Content>
            <div className = 'page-content'>
              <Main />
            </div>
          </Content>
      </Layout>
  </div>
    );
  }
}


export default App;
