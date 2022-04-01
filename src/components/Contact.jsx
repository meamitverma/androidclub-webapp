import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact-container container container-fluid">
      <p className="display-5">Contact</p>
      <div className="form-container card">  
          <form>
            <div className="mb-3">
              <label for="nameInput" className="form-label">Name</label>
              <input type="text" className="form-control" id="nameText" aria-describedby="name"/>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Message</label>
              <textarea class="form-control" placeholder="Leave your message here" id="floatingTextarea"></textarea>
            </div>      
            <button type="submit" className="btn btn-primary" onClick={sendEmail}>Submit</button>
          </form>
      </div>
    </div>
  );
}

function sendEmail() {
  // Email.send({
  //   Host: "smtp.gmail.com",
  //   Username: "",
  //   Password: "",
  //   To: 'amit.kumar2020r@vitbhopal.ac.in',
  //   From: "amit.verma.22080@gmail.com",
  //   Subject: "Sending Email using javascript",
  //   Body: "Well that was easy!!",
  // })
  //   .then(function (message) {
  //     alert("mail sent successfully")
  //   });
  window.open('mailto:amit.verma.22080@gmail.com?subject=subject&body=body');
}

export default Contact;
