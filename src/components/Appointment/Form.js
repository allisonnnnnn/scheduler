import React, { useState } from "react";

import Button from "components/Button";
import InterviewerList from "components/InterviewList";

export default function Form(props) {
  const { name, interviewers, interviewer, onSave, onCancel } = props;
  const [studentName, updateStudentName] = useState(name || "");
  const [selectedInterviewer, setInterviewer] = useState(interviewer || null);

  const reset = function() {
    setInterviewer(null);
    updateStudentName("");
  };

  const cancel = function() {
    props.onCancel();
    reset();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={({ target: { value } }) => updateStudentName(value)}
            /*
          This must be a controlled component
        */
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          value={selectedInterviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}
