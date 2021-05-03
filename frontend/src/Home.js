import React from 'react';
import coding_img_1 from './coding1.png'
import coding_img_2 from './coding2.png'
import styled from 'styled-components';

export const Home = (props) => (
  <div className="App">     
    <header className="App-header-full">                       
      <h1>Welcome to <code class="code">#Include</code> Corp.</h1>
    </header>
    <div className="App-body">
      Here in <code class="code">#Include </code> Corp, we develop fun and exitng apps, programs that help people with their daily day to day activities.
      <br />
      <br />
      <img src={coding_img_1} class="image" alt="Coding Image 1"></img>
      <img src={coding_img_2} class="image" alt="Coding Image 2"></img>
      <br />
      <br />
      <br />
      <p class="para">We do all tech relted stuff here like teaching coding, helping people develop simple apps, programs, games and much more!
      Our blog fuctionality, live Covid 19 tracking functionality and coding tutorials are coming soon!
      <h3>Example: <a className="App-link" href="http://quiz.hashincorp.com:5000" target="_blank" rel="noopener noreferrer">QUIZ</a> app</h3>
      </p>
      <hr />
      <br />
      <br />
      <br />            
    </div>
  </div>
)