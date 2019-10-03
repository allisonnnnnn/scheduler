import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/ Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const { time, interview } = props;
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? (
        <Show student={interview.student} interviewer={interview.interviewer} />
      ) : (
        <Empty />
      )}
    </article>
  );
}
