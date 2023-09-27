import React from "react";
import "./userform.css"

export const UserForm = () => {
  return (
    <>
    <section className="userform">
      <div className="container">
        <div className="flexV inputs">
          <div className="input-div">
            {/* <label>Name</label> */}
            <input type="text" placeholder="Enter full name"/>
          </div>
          <div className="input-div">
            {/* <label>Email</label> */}
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input-div">
            <select name="standard" id="">
                <option value="1"></option>
            </select>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
