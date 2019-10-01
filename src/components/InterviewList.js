import React from "react";
import classNames from "classnames";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewList.scss";

export default function InterviewList(props) {
  const { interviewers, value, onChange } = props;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map(interviewer => {
          return (
            <InterviewerListItem
              key={interviewer.id}
              name={interviewer.name}
              avatar={interviewer.avatar}
              selected={interviewer.id === value}
              setInterviewer={() => onChange(interviewer.id)}
            />
          );
        })}
      </ul>
    </section>
  );
}
