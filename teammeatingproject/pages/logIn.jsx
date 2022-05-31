import React from 'react';
import Image from 'next/image';
import styles from './logIn.module.css';
import UserNameInputComponent from '../components/UserNameInputComponent/UserNameInputComponent';

function logIn() {
  return (
    <div className={styles.allContentInFile}>
        <h1 className={styles.welcome}>Welcome to Shira's Store</h1>
        <Image src="/store.svg" alt="Picture of the author" width={true ? 100 : 200} height={100}/>
        <UserNameInputComponent placeholder="User Name"/>
    </div>
  )
}

export default logIn
