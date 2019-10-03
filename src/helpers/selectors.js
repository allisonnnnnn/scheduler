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

  const interviewerId = interview.interviewer;
  const { student } = interview;

  const interviewer = state.interviewers[interviewerId];

  const result = {
    student,
    interviewer
  };

  return result;
};

export const getInterviewersByDay = (state, day) => {
  const interviewers = [];

  const filteredDay = state.days.filter(dayItem => dayItem.name === day);

  if (filteredDay.length === 0) {
    return interviewers;
  } else {
    filteredDay[0].interviewers.map(id =>
      interviewers.push(state.interviewers[id])
    );
  }

  return interviewers;
};

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter(res => res.name === day)[0];

  if (!filteredDay || !filteredDay.interviewers) return [];

  const result = filteredDay.interviewers.map(interviewer => {
    return state.interviewers[interviewer];
  });

  return result;
}
