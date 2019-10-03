export const getAppointmentsForDay = (state, day) => {
  const appointments = [];

  const filteredDay = state.days.filter(dayITem => dayITem.name === day);
  // console.log(filteredDay);
  if (filteredDay.length === 0) {
    return appointments;
  } else {
    filteredDay[0].appointments.map(id =>
      appointments.push(state.appointments[id])
    );
  }

  return appointments;
};

export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  const id = interview.interviewer;
  const result = {
    student: interview.student,
    interviewer: state.interviewers[id]
  };
  return result;
};
