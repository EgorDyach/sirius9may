import  './underconstruction.css';
import { Text } from '../../components/Text';

export function UnderConstruction() {
  return (
    <div className="underConstruction">
      <Text size={60} color='#fff' weight={700}>🚧Данная страница находится в разработке, но скоро мы это исправим!🚧</Text>
    </div>
  );
}
