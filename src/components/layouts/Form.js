import React, { useState } from 'react';

const Form = ({ formData, handleChange, handleSubmit }) => {
  const { name, caption, url } = formData;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='form-group'>
        <label htmlFor='inputName'>Name</label>
        <input
          type='text'
          className='form-control'
          id='inputName'
          placeholder='Enter Your Name'
          name='name'
          value={name}
          maxLength='20'
          onChange={(e) => handleChange(e)}
          required
        />
        <small className='text-muted'>
          Your name must be less than 20 characters
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='inputCaption'>Caption</label>
        <input
          type='text'
          className='form-control'
          id='inputCaption'
          placeholder='Caption'
          name='caption'
          value={caption}
          maxLength='50'
          onChange={(e) => handleChange(e)}
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
          name='url'
          value={url}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
