import React from "react";
import {Link} from 'react-router-dom';
import "./styles/shortener.css";

const Shortner = ({
  link,
  setlink_input,
  shortenLink,
  invalidInput,
  handleInvalidInput,
}) => {
  return (
    <div className="shortner">
      <div className="shortner--main">
      <label className={`linkLabel ${invalidInput?"invalidLink":""}`}>
      <input
        className={`${invalidInput ? "invalid" : ""} linkInput`}
        type="text"
        id="url"
        value={link}
        placeholder="Shorten a link here..."
        autoComplete="off"
        onChange={(e) => {
          if (invalidInput) handleInvalidInput();
          setlink_input(e.target.value);
        }}
      />
      </label>
      <button onClick={() => shortenLink()}>Shorten It!</button>
      </div>
      <Link to="/user/history" target="_blank" className="historyLink">
        See all your previous activity.
      </Link>
    </div>
  );
};

export default Shortner;
