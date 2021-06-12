import { React, useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Card from '../card/card';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Ellie Dream Coding',
      company: 'Spotify',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'dream.coder@gmail.com',
      message: "Don't forget to code your dream",
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Bob',
      company: 'Uber',
      theme: 'light',
      title: 'Senior Software Engineer',
      email: 'bob@uber.com',
      message: 'Go for it',
      fileName: 'bob',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Chris',
      company: 'Instagram',
      theme: 'colorful',
      title: 'Product Manager',
      email: 'chris@instagram.com',
      message: 'Design your dream',
      fileName: 'chris',
      fileURL: null,
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const update = [...cards, card];
    setCards(update);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
