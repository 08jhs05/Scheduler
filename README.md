# Interview Scheduler

Interview Scheduler is a React app that allows users to book and manage their interviews. Users can see which interviews are available for the day, and book one from Monday to Friday between 12-5pm. Writing/deleting data to database is managed by PostgreSQL. Jest(integration), and Cypress(end to end) were used for development testing.

## Screenshots

- Main page
!["newly added schedule"](https://github.com/08jhs05/Scheduler/blob/master/docs/added.png)

- Dynamically Updated Remaning Spots
!["Screenshot of schedule list when fully booked"](https://github.com/08jhs05/Scheduler/blob/master/docs/schedules.png)

- New Appointment
!["Screenshot of form"](https://github.com/08jhs05/Scheduler/blob/master/docs/Form.png)

- Validation Check
!["newly added schedule"](https://github.com/08jhs05/Scheduler/blob/master/docs/studentBlank.png)
!["newly added schedule"](https://github.com/08jhs05/Scheduler/blob/master/docs/interviewerBlank.png)

- Confirm Delete
!["ask user when delete button is clicked"](https://github.com/08jhs05/Scheduler/blob/master/docs/confirm.png)

## Dependencies

- Axios
- Classnames
- Cypress
- Normalize.css
- React
- React-dom
- React-scripts

## Setup

Install dependencies with `npm install`. Run npm start and go http://localhost:8000/ in your browser. Api server(https://github.com/08jhs05/scheduler-api) must be running on the other side to enable data.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
