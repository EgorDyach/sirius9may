import { useLayoutEffect, useState } from 'react';
import './authpage.css';
import { sha512 } from 'js-sha512';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
const CORRECT_HASH = '2ca73ae359e2b31f88dbb8b790e8f145eeeb20ad469c34507438d6227a8cbb8abc00d93dbe8d532aa6d8c7262810fdb96ad356d6b77beae299b7882aa1184f1d'

export function AuthPage() {
  const [attempts, setAttempts] = useState(Number(localStorage.getItem("attempts")));
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!localStorage.getItem('attempts') || !localStorage.getItem('isAuth2')) {
      localStorage.setItem('attempts', '3');
      localStorage.setItem('isAuth2', 'false');
    } else {
      setAttempts(Number(localStorage.getItem('attempts')))
    }
    if (localStorage.getItem('isAuth2') === 'true') {
      window.location.href = '/auth2'
    }
    const user = localStorage.getItem('token');
    if (user) {
      window.location.href = '/admin'
    }
    setIsLoading(false)
  }, [navigate])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value)
  }

  const handleClick = () => {
    if (sha512(pass) === CORRECT_HASH) {
      localStorage.setItem('isAuth2', 'true');
      navigate('/auth2');
    } else {
      setAttempts(attempts - 1);
      localStorage.setItem('attempts', String(attempts - 1));
    }
    setPass('')
  }
  return (
    <Container>
      <div className='auth1'>
        {isLoading && <Text size={40} color='#000' font='Lora'>Загрузка...</Text>}
        {!isLoading &&
          <>
            <Text size={32} font='Lora' color='#333'>Локальный вход в панель администратора</Text>
            <input value={pass} disabled={attempts <= 0} onChange={handleInput} type="text" placeholder='Локальный пароль' />
            <button disabled={attempts <= 0} onClick={handleClick}><Text size={24} font='Lora' color='#333'>Войти</Text></button>
            <Text size={24} color='red'>Попыток осталось: {attempts}</Text>
          </>
        }
      </div>
    </Container>
  );
}
