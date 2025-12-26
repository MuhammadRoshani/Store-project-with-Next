import styles from "@/styles/Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <div className="container">
        {/* top section: */}
        <div className={styles.contactContainer}>
          <h3>Order tracking, criticism and suggestions</h3>
          <p>
            It is better to use the form below to follow up or ask about the
            order and send a message
          </p>

          <form>
            {/* first input: */}
            <div className={styles.inputBox}>
              <label htmlFor="fullName">Name and Surname</label>
              <input type="text" id="fullName" />
            </div>

            {/* second input: */}
            <div className={styles.inputBox}>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" />
            </div>

            {/* third input */}
            <div className={styles.inputBox}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>

            {/* forth input */}
            <div className={styles.inputBox}>
              <label htmlFor="order">Order Number</label>
              <input type="text" id="order" />
            </div>

            {/* text area */}
            <div className={styles.inputBox}>
              <label htmlFor="message">Message text...</label>
              <textarea rows="5" type="text" id="message"></textarea>
            </div>
          </form>
        </div>

        {/* bottom section: */}
        <div>
          {/* first box: */}
          <div className={styles.contactBox}>
            <FaPhone size="25px" color="#666" />
            <p>
              Sales phone: 45691000 - extension 2 After-sales service: domestic
              3 Tracking orders: internal 1
            </p>
          </div>

          {/* second box: */}
          <div className={styles.contactBox}>
            <IoLocationSharp size="25px" color="#666" />
            <p>
              Address (head office): No. 97, South Iranshahr St., Unit 10,
              Tehran
            </p>
          </div>

          {/* third box: */}
          <div className={styles.contactBox}>
            <IoTimeSharp size="25px" color="#666" />
            <p>
              Working hours of the collection: Saturday to Wednesday (from 9:00
              to 18:00) Thursday (from 09:00 to 14:00)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
