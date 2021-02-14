import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

const Toasts = ({ toastData, setToastData }) => {
  const { toastShow, toastmsg, toastStyle } = toastData;

  return (
    <Toast
      onClose={() => setToastData({ ...toastData, toastShow: false })}
      style={{
        position: 'absolute',
        top: '13%',
        right: '13%',
        zIndex: '9999',
      }}
      show={toastShow}
      delay={4000}
      autohide
      className={`text-white border-0 bg-${toastStyle}`}
    >
      <Toast.Body>{toastmsg}</Toast.Body>
    </Toast>
  );
};

export default Toasts;
