import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button onClick={onLogin} className={styles.button}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button onClick={onLogin} className={styles.button}>
              Github
            </button>
          </li>
        </ul>
      </section>

      <Footer />
    </section>
  );
};

export default Login;
