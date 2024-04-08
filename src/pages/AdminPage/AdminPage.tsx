import './adminpage.css';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';

export function AdminPage() {
  const [isLoading, setIsLoading] = useState(true)
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = '/auth'
    }
    setIsLoading(false)
  });
  return (
    <Container>
      <div className="admin">
        {isLoading && <Text size={28} color='#000' font='Lora'>Загрузка...</Text>}
        {!isLoading && (
          <>
            <Text size={40}>Добро пожаловать на панель администратора!</Text>
            <button onClick={() => { signOut(auth); }}>
              Выйти
            </button>
          </>
        )}
      </div>
    </Container>
  );
}
