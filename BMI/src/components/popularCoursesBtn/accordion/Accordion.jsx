import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./accordion.css";

export default function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="accordionWrapper">
      <div className="accordion">
        <div className="accordionHeader" onClick={handleAccordionClick}>
          <p>{title}</p> <BsChevronDown />
        </div>
        {isExpanded && (
          <div className="accordionBody">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
