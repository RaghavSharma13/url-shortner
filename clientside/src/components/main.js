import React, { useState } from "react";
import Shortner from "./shortner";
import Statistics from "./statistics";
import getShortLink from "../utils/shortenApi";
import Cookies from "js-cookie";
import LinkCard from "./linkcard";
import { setLink } from "../utils/routes";
import "./styles/main.css";

const Main = () => {
  const [link_output, setLink_output] = useState();
  const [link_input, setlink_input] = useState("");
  const [displayCard, setDisplayCard] = useState();
  const [invalidInput, setInvalidInput] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  const shortenLink = async () => {
    setDisplayCard(true);
    setLink_output();
    setInvalidInput(false);
    const obj = await getShortLink(link_input);
    if (obj.error) {
      setDisplayCard(false);
      return setInvalidInput(true);
    }
    setLink_output(obj);
    setlink_input("");
    if (Cookies.get("jwt")) setLink(obj, Cookies.get("jwt"));
  };
  return (
    <div className="main">
      <Shortner
        link={link_input}
        setlink_input={setlink_input}
        shortenLink={shortenLink}
        invalidInput={invalidInput}
        handleInvalidInput={() => setInvalidInput(false)}
      />
      {displayCard && (
        <LinkCard
          index={0}
          newLinks={link_output}
          copyStatus={copyStatus}
          handleCopyStatus={() => setCopyStatus(!copyStatus)}
          deleteLink={() => setLink_output()}
        />
      )}
      <Statistics />
    </div>
  );
};

export default Main;
