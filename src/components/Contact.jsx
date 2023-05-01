import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedn, telegram } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Master",
          from_email: form.email,
          to_email: "baglandir@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch &#8594; spin the earth
        </p>
        <h4 className="text-white text-[24px] font-bold">My contacts:</h4>

        <div className="flex gap-10 mt-2">
          <a href="https://www.linkedin.com/in/bogdan-vozniy/">
            <img
              src={linkedn}
              className="w-12 h-12 object-cover rounded-full"
              style={{ transform: "scale(2)" }}
              alt="Linkedin"
            />
          </a>
          <a href="https://t.me/VozniyBogdan">
            <img
              src={telegram}
              className="w-12 h-12 object-cover rounded-full"
              style={{ transform: "scale(2)" }}
              alt="Telegram"
            />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 flex-grow-0 h-[350px] xl:h-auto md:h-[550px] w-full lg:w-1/2"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
/* <a href="whatsapp://send?phone=380937501429">
            <img
              src="src/assets/connect/whatsap.webp"
              className="w-12 h-12 object-cover rounded-full"
              style={{ transform: "scale(2)" }}
              alt="Whatsapp"
        </a>    />*/
