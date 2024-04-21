import  './thankyou.css';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';

export function ThankYou() {
  return (
    <div className="thankYou">
      <Container>
        <Text As='h2' size={80} font='Lora' weight={500}>Спасибо за участие!</Text>
        <Text As='p' size={50} font='Lora' color='#333' weight={500}>Мы обязательно свяжемся с вами, когда вашу историю проверят.</Text>

      </Container>
    </div>
  );
}
