import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';

class App extends Component {
  render() {
    return (
    <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
              <Navigation>
                  <a href="/">About Me</a>
                  <a href="/">Edit Profile</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">About Me</a>
                  <a href="/">Edit Profile</a>
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
