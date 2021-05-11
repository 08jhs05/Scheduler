import React from 'react'
import InterviewerListItem from './InterviewerListItem'

import 'components/InterviewerList.scss'

export default function InterviewerList (props) {

  const interviewerList = props.interviewers.map( (interviewer) => {
    return <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.interviewer === interviewer.id}
      setInterviewer={event => props.setInterviewer(interviewer.id)}
    />;
  })

  return interviewerList;
}
