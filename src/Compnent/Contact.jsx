import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="name" placeholder="XYZ" required />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="Abc@Email.com" required />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
              placeholder="Tell us about Your Query.."
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
