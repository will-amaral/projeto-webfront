import React from 'react';
import { Notification, Delete } from 'bloomer';
import { useSelector, useDispatch } from 'react-redux';
import { closeMessage } from '../actions';

export default function CustomNotification({ color, close }) {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(closeMessage());
  }

  if (message) {
    return (
      <Notification isColor={message.color}>
        <Delete onClick={handleClose} />
        {message.text}
      </Notification>
    );
  } else {
    return null;
  }
}
