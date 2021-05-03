import React from 'react';
import {Button} from 'react-bootstrap';

export const Blog = (props) => (
  <div>     
    <header className="Blog">
      <div>                       
        <h1>Create a Blog</h1>
      </div>
      <br />
      <br />
      <div class="blog-content">
        <div class="blog-title"><input type="text" name="inp_title" placeholder="Title"/></div>
        <br />
        <textarea name="bolg_desc" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' placeholder="Description" rows="25"></textarea>
        <br />
        <br />
        <Button type="submit" size="lg" variant="primary">Create Blog</Button>
        <br />
        <br />
      </div>
    </header>
  </div>
)