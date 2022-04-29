import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(e.target.id);
  };
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <div id="contact" className="container portfolio">
        <div className="contact-content py-5">
          <h2 className="text-center mb-5">
            <span className="pulse">📨</span>Contact
          </h2>
          <div className="row">
            <div className="col-12 col-md-3 d-flex align-items-center">
              <div className="contact-left px-5">
                <p>Have any questions or want to chat?</p>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="contact-right px-5">
                <form name="contact" onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <input
                      name="name"
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      value={formData["email"]}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      id="message"
                      placeholder="Message"
                      value={formData["message"]}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    ></textarea>
                  </div>
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="d-flex justify-content-center">
                    <button type="submit" class="btn btn-contact">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
