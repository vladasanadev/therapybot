import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function TherapyForm(props) {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="form-container">
          <h1 className="text-center first-color-text custom-font">Hey</h1>
          <h2 className="text-center second-color-text custom-font">specify your request</h2>
          <form className="text-center">
            <div className="form-group">
              <textarea className="form-control first-color" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="submit" className="btn btn-primary first-color custom-font">Submit</button>
          </form>
        </div>
      </div>
    );
}

export default TherapyForm;