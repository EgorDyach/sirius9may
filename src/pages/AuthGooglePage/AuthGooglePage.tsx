import { useLayoutEffect, useState } from 'react';
import './authgooglepage.css';
import { auth } from '../../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { sha512 } from 'js-sha512';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
// import { useNavigate } from 'react-router-dom';

export function AuthGooglePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('attempts', '3');
        localStorage.setItem('isAuth2', 'false');
        window.location.href = '/admin'
      } else if (localStorage.getItem('isAuth2') === 'false') {
        window.location.href = '/auth'
      }
      setIsLoading(false)
    });
  }, [])


  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value)
  }
  const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value)
  }
  const handleClick = () => {
    signInWithEmailAndPassword(auth, login, sha512(pass)).then(() => {

    }
    ).catch(err => {
      console.error(err)
      setError(String(err))
    })
  }
  return (
    <Container>
      <div className='auth2'>
      {isLoading && <Text size={40} color='#000' font='Lora'>Загрузка...</Text>}
        {!isLoading &&
          <>
            <Text size={40} color='#000' font='Lora'>Глобальный вход в панель администратора</Text>
            <input type='text' value={login} onChange={handleChangeLogin} placeholder='Email админа' />
            <input type='text' value={pass} onChange={handleChangePass} placeholder='Пароль админа' />
            <button onClick={handleClick} className='auth2__submit'>
              <Text size={40} color='#000' font='Lora'>
                Войти
              </Text>
            </button>
            {error && (error === 'FirebaseError: Firebase: Error (auth/invalid-email).' ? <Text size={24} color='red'>Неверный логин или пароль!</Text> : <Text size={24} color='red'>{error}</Text>)}
          </>}
      </div>
    </Container>
  );
}
