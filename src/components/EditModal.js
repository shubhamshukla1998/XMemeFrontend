import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const EditModal = ({
  handleClose,
  show,
  formData,
  setToastData,
  toastData,
}) => {
  const { name, url, caption } = formData;

  const [editForm, setEditData] = useState({
    edit_name: name || '',
    edit_caption: caption || '',
    edit_url: url || '',
  });

  // const {toastShow, toastmsg, toastStyle} = toastData

  //toasts
  //const [tshow, tsetShow] = useState(false);

  useEffect(() => {
    setEditData({
      edit_name: name,
      edit_caption: caption,
      edit_url: url,
    });
  }, [formData]);

  const { edit_name, edit_url, edit_caption } = editForm;

  const handleEditChange = (e) => {
    setEditData({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updMeme = {
      url: edit_url,
      caption: edit_caption,
    };
    //let res;
    // console.log(updMeme);
    // console.log(formData._id);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(updMeme);

      const res = await axios.patch(`/memes/${formData._id}`, body, config);
      console.log(res);
      if (res.status === 204) {
        console.log('meme updated successfully');
        setToastData({
          toastShow: true,
          toastmsg: 'Meme updated successfully',
          toastStyle: 'success',
        });

        window.setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    } catch (err) {
      console.error(err);
      setToastData({
        toastShow: true,
        toastmsg: err.response.data,
        toastStyle: 'danger',
      });
    }
  };

  return (
    <>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => handleUpdate(e)}>
            <div className='form-group'>
              <label htmlFor='inputName'>Name</label>
              <input
                type='text'
                className='form-control'
                id='inputName'
                placeholder='Enter Your Name'
                name='edit_name'
                value={edit_name}
                onChange={(e) => handleEditChange(e)}
                required
                readOnly
              />
            </div>
            <div className='form-group'>
              <label htmlFor='inputCaption'>Caption</label>
              <input
                type='text'
                className='form-control'
                id='inputCaption'
                placeholder='Caption'
                name='edit_caption'
                value={edit_caption}
                onChange={(e) => handleEditChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <label className='form-check-label' htmlFor='inputUrl'>
                Url
              </label>
              <input
                type='url'
                className='form-control'
                id='url'
                placeholder='Enter url'
                name='edit_url'
                value={edit_url}
                onChange={(e) => handleEditChange(e)}
                required
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
