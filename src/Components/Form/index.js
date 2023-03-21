import React from 'react'
import "./style.css";

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type= "text" placeholder="Name"></input>
            <label>Your Email</label>
            <input type="text" placeholder="Email"></input>
            <label> Message</label>
              <textarea row="10" placeholder="Type your message here"></textarea>
              <button className="btn" type="submit">Submit</button>
        </form>

    </div>
  );
}

export default Form