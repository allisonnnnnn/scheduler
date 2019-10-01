import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer } = props;
  const itemClass = classNames("interviewers__item", {
    "interviewers__item-image": avatar,
    "interviewers__item--selected": selected,
    "interviewers__item--selected-image": avatar,
    selected
  });

  return (
    <li className={itemClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
