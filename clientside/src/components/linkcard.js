import React from "react";
import "./styles/linkCard.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
const LinkCard = ({
  id,
  index,
  copyStatus,
  newLinks,
  handleCopyStatus,
  deleteLink,
}) => {
  return (
    <div className="linkCard">
      {newLinks ?(
        <div className="linkCard--content">
          <div className="original">
            <DeleteForeverIcon
              className="icon-delete"
              onClick={() => deleteLink(id)}
            />
            <a
              href={newLinks.fullLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {newLinks.fullLink}
            </a>
          </div>
          <div className="shortLink">
            <a
              id="slink"
              href={newLinks.fullLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {newLinks.shortLink}
            </a>
            <button
              className={`btn-copy ${copyStatus ? "copied" : ""}`}
              onClick={() => {
                handleCopyStatus(index);
                navigator.clipboard.writeText(newLinks.shortLink);
              }}
            >
              {copyStatus ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ) : (
        <div className={`skeleton`}>
          <p></p>
          <hr/>
          <div className="skeleton--shortlink">
          <p></p>
          <div className="skeleton--btn"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkCard;
