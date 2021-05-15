import React from 'react';
import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import Confirm from './Confirm';

import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SAVING = "SAVING";
const ERROR_SAVING = "ERROR_SAVING";
const DELETING = "DELETING";
const ERROR_DELETING = "ERROR_DELETING";
const CONFIRM = "CONFIRM";

export default function Appointment (props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer: interviewer
    };
    props.book(props.id, interview).then( () => {
      transition(SHOW);
    });
  };

  function onDelete() {
    transition(DELETING);
    props.cancel(props.id).then( () => {
      transition(EMPTY);
    })
  }
  
  return  <article className="appointment">
    <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={() => transition(CONFIRM)}
        onEdit={() => transition(EDIT)}
      />
    )}
    {mode === CREATE && <Form onSave={save} onCancel={back} interviewers={props.interviewers}/>}
    {mode === EDIT && <Form onSave={save} onCancel={back} interviewers={props.interviewers} default={{ student: props.interview.student, interviewer: props.interview.interviewer.id }}/>}
    {mode === SAVING && <Status message='Saving...'/>}
    {mode === DELETING && <Status message='Deleting...'/>}
    {mode === CONFIRM && <Confirm message='Are you sure you would like to delete???' onCancel={() => transition(SHOW)} onConfirm={onDelete}/>}
  </article>;
}

