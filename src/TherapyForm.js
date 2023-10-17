import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

function TherapyForm(props) {
  const sendMessage = async (message) => {
    try {
      const response = await axios.post('YOUR_BACKEND_URL/api/chat', { message });
      const reply = response.data.reply;
      console.log(response.data.reply)
      // Handle the reply (display it, etc.)
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
            <button type="submit" className="btn btn-primary third-color first-color-text custom-font uppercase-text" onClick={sendMessage}>Submit</button>
          </form>
        </div>
      </div>
    );
}

export default TherapyForm;