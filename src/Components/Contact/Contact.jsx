import React from "react";
import styles from "./Contact.module.css";
import contact from "../../assets/contact.png";
import msg from "../../assets/msg.png";
import location from "../../assets/location.png";
import mainmessage from "../../assets/mainmessage.png";

const Contact = () => {
  // w3form code start here
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ca8d7e1f-0445-4177-96ee-38fb0afecdeb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  // w3for code end here

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.leftcontact}>
        <h2 className={styles.msg}>
          <img src={mainmessage} alt="" height={60} width={35} />
          Send Message
        </h2>
        <ul>
          <li>
            <img src={contact} alt="" height={40} width={25} /> Contact
            +923226571931
          </li>
          <li>
            <img src={msg} alt="" height={40} width={25} /> Email
            mahirsolution86@gmail.com
          </li>
          <li>
            <img src={location} alt="" height={40} width={25} /> Location Haji
            Park Near Be-nazir Income Office Kasur city
          </li>
        </ul>
      </div>
      <div className={styles.rightcontact}>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number"
          />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            placeholder="Type Query/Message"
            rows={10}
          ></textarea>
          <button className={styles.btn} type="submit">
            Send
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
