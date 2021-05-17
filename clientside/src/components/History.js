import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import LinkCard from "./linkcard";
import {getLinks,deleteLink} from '../utils/routes';
import "./styles/history.css";

const History = () => {
  const [links, setLinks] = useState([]);
  const [copyStatus, setCopyStatus] = useState([]);
  
  const handleDelete=async(id)=>{
      deleteLink(id,Cookies.get('jwt'));
      getLinks(setLinks,setCopyStatus,Cookies.get('jwt'));
  }
  
  const handleCopyStatus = (index) => {
    let copyList = copyStatus.slice();
    if (copyList[index]) {
      copyList[index] = false;
      setCopyStatus(copyList);
      return;
    }
    copyList.map((e, index) => (copyList[index] = false));
    copyList[index] = true;
    setCopyStatus(copyList);
  };
  
  useEffect(() => getLinks(setLinks,setCopyStatus,Cookies.get('jwt')), []);
  
  return (
    <div className="historyPage">
      {Cookies.get("jwt") ? (
        <div className="history--list">
          <h1>All your Links.</h1>
          {links.length === 0 ? (
            <h2>WOW You don't have any shortened Links!!!</h2>
          ) : (
            links.map((el, index) => (
              <LinkCard
                key={el._id}
                id={el._id}
                index={index}
                copyStatus={copyStatus[index]}
                newLinks={el}
                handleCopyStatus={handleCopyStatus}
                deleteLink={handleDelete}
              />
            ))
          )}
        </div>
      ) : (
        <div className="history--msg">
          <h2>User Authentication Failed</h2>
          <Link to="/users/login">Please try Loging In first.</Link>
        </div>
      )}
    </div>
  );
};

export default History;
