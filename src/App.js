import React, { useState, useEffect } from 'react';
import './App.css';

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 1500; i++) {
    const style = {
      position: 'absolute',
      top: `${Math.random() * 99.5}%`,
      left: `${Math.random() * 99.5}%`,
      width: '1.5px',
      height: '1.5px',
      backgroundColor: 'white',
      animation: 'blink 1s infinite',
      animationDelay: `${Math.random() * 2}s`,
    };
    stars.push(<div key={i} style={style}></div>);
  }
  return stars;
};

const RegistrationPage = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration: ', { username, email, phone, dob, password });
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {stars}
      <div className="pulsing-ball"></div>
      <form onSubmit={handleSubmit} className="rectangle">
        <div className="square red">
          <h2 className="title">Registro</h2>
        </div>
        <div className="square pink">
          <div className="inputGroup">
            <label className="label" htmlFor="username"></label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required
              placeholder="Usuário"
            />
          </div>
        </div>
        <div className="square orange">
          <div className="inputGroup">
            <label className="label" htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
              placeholder="Email"
            />
          </div>
        </div>
        <div className="square purple">
          <div className="inputGroup">
            <label className="label" htmlFor="password"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="square brown-rectangle">
          <button type="submit" className="button">
            Registrar
          </button>
        </div>
      </form>
      <div className="example-registration">
        <h3>Listagem</h3>
        <p>Usuário: caio</p>
        <p>Email: caiopinto@gmail.com</p>
        <p>Senha: caiopinto123 </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
