import React, { useRef, useState, useEffect } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

    useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35z2mqd", // Your Service ID
        "template_tjsjcae", // Your Template ID (check EmailJS dashboard for the correct template ID)
        form.current,
        "0zlG5JaB7t9dZCtu3" // Your Public Key from EmailJS dashboard
      )
      .then(
        (result) => {
          setShowSuccess(true);
          setShowError(false);
          form.current.reset();
        },
        (error) => {
          setShowError(true);
          setShowSuccess(false);
        }
      );
  };

  return (
    <div
      className="pt-28 pb-28 flex flex-col justify-center items-center  dark:bg-black"
      id="contact"
    >
      <h1 className="text-2xl lg:text-3xl text-center font-bold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest ">
        Contact
      </h1>

      <div className=" shadow-md flex flex-row justify-center md:flex-col md:gap-8 bg-white dark:bg-gray-900 py-24 md:py-5 w-[70vw] md:w-[90vw] rounded-md">
        <div className="flex flex-col w-[49vw] md:w-full items-center justify-center gap-10">
          <ul className="flex flex-wrap md:w-[70%] gap-5 justify-center text-blue-500 text-xl">
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16">
              {" "}
              <a
                className="flex w-16 h-16 items-center justify-center"
                href="https://github.com/voidumesha"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaGithub />{" "}
              </a>{" "}
            </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16">
              {" "}
              <a
                className="flex w-16 h-16 items-center justify-center"
                href="https://twitter.com/RukshanUmesha"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaTwitter />{" "}
              </a>{" "}
            </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16">
              {" "}
              <a
                className="flex w-16 h-16 items-center justify-center"
                href="https://t.me/Void_Umesha"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaTelegram />{" "}
              </a>{" "}
            </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16">
              {" "}
              <a
                className="flex w-16 h-16 items-center justify-center"
                href="https://www.linkedin.com/in/umesha-rukshan-b1380b217"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaLinkedin />{" "}
              </a>{" "}
            </li>
            <li className="hover:text-blue-600 rounded-md items-center justify-center bg-gray-200 dark:bg-gray-700 hover:scale-110 w-16 h-16">
              {" "}
              <a
                className="flex w-16 h-16 items-center justify-center"
                href="mailto:Umesharukshan2000@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaEnvelope />{" "}
              </a>{" "}
            </li>
          </ul>
          <div>
            <h2 className="text-2xl lg:text-lg md:text-base text-center font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pb-5">
              {" "}
              Want to hire me ?
            </h2>
            <p className="text-left text-gray-500 dark:text-gray-400">
              I am available for
              <hr className="my-6 border-t-2 border-blue-400 dark:border-blue-600 w-full" />
              <div className="mb-8 flex flex-col items-start">
                <span className="dark:text-gray-400 text-2xl font-extrabold text-gray-700 dark:text-gray-200 mb-2 text-left border-2 border-blue-400 dark:border-blue-600 rounded-lg px-4 py-2 shadow-sm bg-white dark:bg-gray-800 transition-all duration-200 hover:scale-105">
                  Mobile App development
                </span>
                <span className="dark:text-gray-400 text-2xl font-extrabold text-gray-700 dark:text-gray-200 mb-2 text-left border-2 border-blue-400 dark:border-blue-600 rounded-lg px-4 py-2 shadow-sm bg-white dark:bg-gray-800 transition-all duration-200 hover:scale-105">
                  Embedded system development
                </span>
                <span className="dark:text-gray-400 text-2xl font-extrabold text-gray-700 dark:text-gray-200 mb-2 text-left border-2 border-blue-400 dark:border-blue-600 rounded-lg px-4 py-2 shadow-sm bg-white dark:bg-gray-800 transition-all duration-200 hover:scale-105">
                  Website development
                </span>
                <span className="dark:text-gray-400 text-2xl font-extrabold text-gray-700 dark:text-gray-200 mb-2 text-left border-2 border-blue-400 dark:border-blue-600 rounded-lg px-4 py-2 shadow-sm bg-white dark:bg-gray-800 transition-all duration-200 hover:scale-105">
                  Ai tools creating
                </span>
                <span className="dark:text-gray-400 text-2xl font-extrabold text-gray-700 dark:text-gray-200 text-left border-2 border-blue-400 dark:border-blue-600 rounded-lg px-4 py-2 shadow-sm bg-white dark:bg-gray-800 transition-all duration-200 hover:scale-105">
                  POS System building
                </span>
              </div>
              Connect with me via social media or email.
            </p>
          </div>
        </div>
        <div className="flex w-[50vw] md:w-full items-center justify-center">
          <form
            ref={form}
            className="flex gap-5 flex-col w-[60%] md:w-[80%]"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-800 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full p-2 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-700 hover:bg-gray-200 hover:dark:bg-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            >
              Submit
            </button>

            {/* Show success or error message */}
            {showSuccess && (
              <div className="mb-4 text-green-600 font-bold">
                Message sent successfully!
              </div>
            )}
            {showError && (
              <div className="mb-4 text-red-600 font-bold">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
