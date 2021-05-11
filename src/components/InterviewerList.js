import React, { Fragment } from 'react'
import InterviewerListItem from './InterviewerListItem'

import 'components/InterviewerList.scss'

export default function InterviewerList (props) {

  const interviewerList = props.interviewers.map( (interviewer) => {
    return <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.value === interviewer.id}
      setInterviewer={event => props.onChange(interviewer.id)}
    />;
  })

  return <Fragment>
    <div className="interviewers__header">Interviewers</div>
    <div className="interviewers__list">{interviewerList}</div>
  </Fragment>;
}
