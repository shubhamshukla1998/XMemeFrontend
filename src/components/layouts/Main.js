import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMeme from './DisplayMeme';
import Form from './Form';
import Toasts from './../Toasts';

const Main = () => {
  const [formData, setFormData] = useState({
    name: '',
    caption: '',
    url: '',
  });

  const [memeState, setMemeState] = useState({
    memeData: [],
    loading: true,
    duplicate: false,
  });

  const [toastData, setToastData] = useState({
    toastShow: false,
    toastmsg: '',
    toastStyle: '',
  });

  const { name, caption, url } = formData;

  //function to get all the memes
  const getData = async () => {
    try {
      setFormData({
        name: '',
        caption: '',
        url: '',
      });
      const res = await axios.get('https://x-meme-app-10.herokuapp.com/memes');

      setMemeState({
        memeData: res.data,
        loading: false,
        duplicate: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //function to post memes
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMeme = {
      name,
      caption,
      url,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(newMeme);

      const res = await axios.post(
        'https://x-meme-app-10.herokuapp.com/memes',
        body,
        config
      );

      if (res.status === 200) {
        setToastData({
          toastShow: true,
          toastmsg: 'Meme Posted Successfully',
          toastStyle: 'success',
        });
        setFormData({
          name: '',
          caption: '',
          url: '',
        });
        // setMemeState({
        //   memeData: [],
        //   duplicate: false,
        // });
        getData();
      }
    } catch (err) {
      console.error(err);

      if (err.response.status === 409) {
        setToastData({
          toastShow: true,
          toastmsg: err.response.data,
          toastStyle: 'warning',
        });
      }
    }
  };

  useEffect(() => {
    return getData();
  }, []);

  return (
    <div className='container'>
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Toasts toastData={toastData} setToastData={setToastData} />
      {memeState.loading === true ? (
        <p>Loading....</p>
      ) : (
        <DisplayMeme
          data={memeState.memeData}
          formData={formData}
          setToastData={setToastData}
          toastData={toastData}
        />
      )}
    </div>
  );
};

export default Main;
