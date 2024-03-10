import { useState } from "react";
import styles from "../styles/Home.module.scss";
import axios from "axios";
export default function Home() {
  const [fullname, setFullName] = useState("ayoub wazane");
  const [email, setEmail] = useState("ayoubwazane306@gmail.com");
  const [phone, setPhone] = useState("0678670253");
  const [address, setAddress] = useState("Agadir");
  const [amount, setAmount] = useState("348");
  const [loading, setLoading] = useState(false);

  const handleInpChange = (e, input) => {
    input(e.target.value);
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    var userData = {
      BillToName: fullname.split(" ").join(""), //Error: BillToName can't contain whitespace thats why we used .split.json,
      tel: phone,
      email,
      address,
      amount,
    };
    try {
      setLoading(true);
      await axios
        .post("/api/pay", userData)
        .then((res) => {
          const formHtml = res.data;
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(formHtml, "text/html");
          const form = htmlDoc.querySelector("form");
          /* form.action = "https://payment.cmi.co.ma/fim/est3Dgate"; please uncomment this line when u are in production */
          document.body.appendChild(form);
          form.submit();
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles._hero}>
      <form className={styles._hero_form} onSubmit={onSubmitForm}>
        <div className={styles._hero_form_inpHandler}>
          <label htmlFor="fullname">FullName :</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => handleInpChange(e, setFullName)}
          />
        </div>
        <div className={styles._hero_form_inpHandler}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => handleInpChange(e, setEmail)}
          />
        </div>
        <div className={styles._hero_form_inpHandler}>
          <label htmlFor="fullname">Phone :</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="phone"
            value={phone}
            onChange={(e) => handleInpChange(e, setPhone)}
            required
          />
        </div>
        <div className={styles._hero_form_inpHandler}>
          <label htmlFor="address">Address :</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => handleInpChange(e, setAddress)}
            required
            id="address"
          />
        </div>
        <div className={styles._hero_form_inpHandler}>
          <label htmlFor="amount">Amout :</label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => handleInpChange(e, setAmount)}
            required
            id="amount"
          />
        </div>
        <div className={styles._hero_form_inpHandler}>
          <input type="submit" value={loading ? "sending..." : "submit"} />
        </div>
      </form>
    </div>
  );
}
