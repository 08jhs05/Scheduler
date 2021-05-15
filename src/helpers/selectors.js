function selectUserByName(state, name) {
  const filteredNames = state.users === undefined ? null : state.users.filter(user => user.name === name);
  return filteredNames;
}

function getAppointmentsForDay(state, day) {
  const searchDay = state.days.length === 0 ? [] : state.days.filter(elem => elem.name === day);
  const appointmentsByDay = searchDay.length === 0 ? [] : searchDay[0].appointments
  const filteredApps = appointmentsByDay.map(appointment => state.appointments[appointment]);
  return filteredApps;
}

function getInterview(state, interview) {
  return interview === null ? null : { ...interview, interviewer: state.interviewers[interview.interviewer]};
}

function getInterviewersForDay(state, day) {
  const searchDay = state.days.length === 0 ? [] : state.days.filter(elem => elem.name === day);
  const appointmentsByDay = searchDay.length === 0 ? [] : searchDay[0].appointments
  const interviewers = [];
  for(const appointmentID of appointmentsByDay) {
    let interv = state.appointments[appointmentID].interview;
    if(interv && (interviewers.find(elem => elem.id === interv.interviewer) === undefined)) interviewers.push(state.interviewers[interv.interviewer]);
  }
  return interviewers;
}

export {selectUserByName, getAppointmentsForDay, getInterview, getInterviewersForDay};