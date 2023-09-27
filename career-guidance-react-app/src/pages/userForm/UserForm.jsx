import React from "react";
import "./userform.css"

export const UserForm = () => {
  return (
    <>
    <section className="userform">
      <div className="container">
        <form className="flexV inputs">
          <div className="input-div">
            <input type="text" placeholder="Enter full name"/>
          </div>
          <div className="input-div">
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input-div">
            <select name="standard" id="" className="">
              <option selected>Highest level of Education</option>
                <option value="1">10th</option>
                <option value="1">11th</option>
                <option value="1">12th</option>
                <option value="1">Graduation</option>
                <option value="1">Post Graduation</option>
            </select>
          </div>
          <div className="input-div">
            <select name="standard" id="" className="">
              <option selected>Career Stream chosen or aspiring for</option>
                <option value="1">Medical</option>
                <option value="1">Non Medical</option>
                <option value="1">Commerce</option>
                <option value="1">Arts</option>
            </select>
          </div>

          <button>CONTINUE</button>
        </form>
      </div>
    </section>
    </>
  );
};
