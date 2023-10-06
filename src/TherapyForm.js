import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function TherapyForm(props) {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="form-container">
        <div className="text-center">
        <p className="first-color-text custom-font uppercase-text">
                        <i className="fas fa-comment"></i> Hey
                    </p>
                    </div>
          <h3 className="text-center second-color-text custom-font uppercase-text">specify your request</h3>
          <form className="text-center">
            <div className="form-group">
              <textarea className="form-control first-color" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="submit" className="btn btn-primary third-color first-color-text custom-font uppercase-text">Submit</button>
          </form>
        </div>
      </div>
    );
}

export default TherapyForm;