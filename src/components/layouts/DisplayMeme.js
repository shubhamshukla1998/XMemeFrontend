import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import EditModal from './../EditModal';

const DisplayMeme = ({ data, updFormData, setToastData, toastData }) => {
  const [show, setShow] = useState(false);
  let [clickedIdx, setIdx] = useState(0);

  //  let clickedIdx = 0;
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    // if (e.target.parentElement.value == 'button') console.log('True');
    setIdx(e.target.value || e.target.parentElement.value);

    //console.log(e.target.value);
    setShow(true);
  };

  return (
    <div
      className='row mt-2 '
      style={{ maxHeight: '28rem', overflow: 'scroll' }}
    >
      {data.map((item, i) => (
        <div className='col col-lg-3 col-md-4 col-sm-6 ' key={i}>
          <div className='card meme-card' style={{ width: '20rem' }}>
            <div className='class-header meme-header text-center'>
              {item.name}
            </div>
            <img
              src={item.url}
              className='card-img-top'
              alt='meme'
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://bitsofco.de/content/images/2018/12/broken-1.png';
              }}
            />
            <div className='card-body'>
              <h5 className='card-title meme-caption'>{item.caption}</h5>
              <Button
                variant='primary'
                onClick={(e) => handleShow(e)}
                value={i}
              >
                <i
                  className='fas fa-edit'
                  // onClick={(e) => handleShow(e)}
                  // value={i}
                ></i>
              </Button>
            </div>
          </div>
        </div>
      ))}
      <EditModal
        show={show}
        handleClose={handleClose}
        formData={data[clickedIdx]}
        updFormData={updFormData}
        setToastData={setToastData}
        toastData={toastData}
      />
    </div>
  );
};

export default DisplayMeme;
