/* eslint-disable react/no-children-prop */
// import React from 'react'
import styles from "./createpost.module.css";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
// import axios from "axios";
// import baseUrl from "../../baseUrl";
import instance from "../../../services/axios";

const  Createpost= () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData()

    // form.append("title", title.current.value);
    // form.append("subtitle", subtitle.current.value);
    // form.append("cover", cover.current.files[0]);
    // // console.log();
    // console.log(title.current.value);
    // console.log(subtitle.current.value);
    // console.log(cover.current.files);
    // console.log(typeof form);
    // console.log(instance);
    instance
      .post(`/blog/add_post`, form)
      .then((res) => {
        console.log(res);
        alert("successful")
      })
      .catch((err) => {
        console.log(err.response);
        alert("error")
      })
      
  };
  return (
    <div className={styles.body}>
      <div className={styles.input_box}>
        <h1 className={styles.input_box_heading}>CREATE POST</h1>

       <form onSubmit={handleSubmit}>
       <Input
          type="name"
          placeholder="ADD TITLE "
          maininput={false}
          onchange={handleonchange}
        />
        <Input
          type="name"
          placeholder="ADD SUBTITLE "
          maininput={false}
          onchange={handleonchange}
        />
        {/* <Input type="name" placeholder="Add Post" className={styles.post} /> */}
        <textarea
          className={styles.input_box__textarea}
          placeholder="ADD POST"
        ></textarea>
        <Input
          type="file"
          placeholder="image"
          name="cover"
          useref={cover}
          maininput={true}
        />
        <Button children="CREATE" onclick={create} type="submit"/>
       </form>
      </div>
    </div>
  );
};

export default Createpost;
