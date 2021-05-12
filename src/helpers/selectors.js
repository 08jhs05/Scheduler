export function selectUserByName(state, name) {
  const filteredNames = state.users.filter(user => user.name === name);
  return filteredNames;
}

export default function getAppointmentsForDay(state, day) {
  const searchDay = state.days.length === 0 ? [] : state.days.filter(elem => elem.name === day);
  const appointmentsByDay = searchDay.length === 0 ? [] : searchDay[0].appointments
  const filteredApps = appointmentsByDay.map(appointment => state.appointments[appointment]);
  return filteredApps;
}