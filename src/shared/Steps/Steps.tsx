import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import './steps.css';

export function Steps() {
  return (
    <div className='steps'>
      <Container>
        <Text As='h2' className='steps__title' size={80} weight={500} font='Lora'>Как принять участие</Text>
        <ul className='steps__list'>
          <span className='steps__line'>
            <span className='steps__line-active'></span>
          </span>
          <li className="steps__item">
            <div className="steps__item-icon">
              <svg width="193" height="187" viewBox="0 0 193 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.5217 30.7356H146.382H161.791V46.1034V99.8908H146.382V61.4713H38.5217V138.31H107.861V153.678H38.5217H23.113V138.31V46.1034V30.7356H38.5217Z" fill="#343434" />
                <path d="M148.292 129.481L166.307 152.266L151.005 164.303L132.987 141.519L121.541 155.295L107.968 94.1782L164.395 121.589L148.296 129.479L148.292 129.481ZM155.359 150.973L136.196 126.74L146.652 121.62L119.068 108.223L125.708 138.093L133.135 129.151L152.298 153.385L155.359 150.973Z" fill="#343434" />
              </svg>
            </div>
            <div className="steps__item-info">
              <Text As='h3' className='steps__item-num' size={48} font='Lora' color='#fff'>1</Text>
              <Text size={28} font='Lora' weight={400} className="steps__item-text">Нажмите на кнопку “Принять участие” и перейдите на страницу для заполнения заявки</Text>
            </div>
          </li>
          <li className="steps__item">
            <div className="steps__item-icon">
              <svg width="220" height="170" viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M133.974 14.1667H104.5C101.538 5.95 93.782 0 84.6154 0C75.4487 0 67.6923 5.95 64.7307 14.1667H35.2564H21.1538L21.1538 28.3333V141.667V155.833H35.2564H133.974H148.077V141.667V28.3333V14.1667H133.974ZM84.6154 14.1667C88.4936 14.1667 91.6666 17.3542 91.6666 21.25C91.6666 25.1458 88.4936 28.3333 84.6154 28.3333C80.7372 28.3333 77.5641 25.1458 77.5641 21.25C77.5641 17.3542 80.7372 14.1667 84.6154 14.1667ZM133.974 141.667H35.2564V28.3333H49.3589V49.5833H119.872V28.3333H133.974V141.667Z" fill="#343434" />
                <path d="M93.6992 109.219V131.875H116.253L182.771 65.0544L160.218 42.3981L93.6992 109.219ZM200.213 47.5335C202.559 45.1773 202.559 41.371 200.213 39.0148L186.139 24.8773C183.794 22.521 180.005 22.521 177.659 24.8773L166.653 35.9335L189.207 58.5898L200.213 47.5335Z" fill="#343434" />
              </svg>
            </div>
            <div className="steps__item-info">
              <Text As='h3' className='steps__item-num' size={48} font='Lora' color='#fff'>2</Text>
              <Text size={28} font='Lora' weight={400} className="steps__item-text">Заполните заявку и оставьте почту. Нажмите на кнопку “Отправить”, чтобы заявка отправилась на рассмотрение администрацией</Text>
            </div>
          </li>
          <li className="steps__item">
            <div className="steps__item-icon">
              <svg width="172" height="181" viewBox="0 0 172 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M133 14H103.74C100.8 5.88 93.1 0 84 0C74.9 0 67.2 5.88 64.26 14H35H21V28V140V154H35H133H147V140V28V14H133ZM84 14C87.85 14 91 17.15 91 21C91 24.85 87.85 28 84 28C80.15 28 77 24.85 77 21C77 17.15 80.15 14 84 14ZM133 140H35V28H49V49H119V28H133V140Z" fill="#343434" />
                <path d="M120.646 120.583H115.873L114.181 118.952C120.102 112.065 123.667 103.123 123.667 93.3958C123.667 71.7062 106.085 54.125 84.3958 54.125C62.7063 54.125 45.125 71.7062 45.125 93.3958C45.125 115.085 62.7063 132.667 84.3958 132.667C94.1229 132.667 103.065 129.102 109.952 123.181L111.583 124.873V129.646L141.792 159.794L150.794 150.792L120.646 120.583ZM84.3958 120.583C69.3521 120.583 57.2083 108.44 57.2083 93.3958C57.2083 78.3521 69.3521 66.2083 84.3958 66.2083C99.4396 66.2083 111.583 78.3521 111.583 93.3958C111.583 108.44 99.4396 120.583 84.3958 120.583Z" fill="#343434" />
              </svg>

            </div>
            <div className="steps__item-info">
              <Text As='h3' className='steps__item-num' size={48} font='Lora' color='#fff'>3</Text>
              <Text size={28} font='Lora' weight={400} className="steps__item-text">После отправки заявка будет проверена администрацией в ближайшие сроки</Text>
            </div>
          </li>
          <li className="steps__item">
            <div className="steps__item-icon">
              <svg width="171" height="174" viewBox="0 0 171 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84 160C91.7 160 98 153.7 98 146H70C70 153.7 76.3 160 84 160ZM126 118V83C126 61.51 114.59 43.52 94.5 38.76V34C94.5 28.19 89.81 23.5 84 23.5C78.19 23.5 73.5 28.19 73.5 34V38.76C53.48 43.52 42 61.44 42 83V118L28 132V139H140V132L126 118ZM112 125H56V83C56 65.64 66.57 51.5 84 51.5C101.43 51.5 112 65.64 112 83V125Z" fill="#343434" />
                <path d="M133.5 6.25C116.219 6.25 102.25 20.2188 102.25 37.5C102.25 54.7813 116.219 68.75 133.5 68.75C150.781 68.75 164.75 54.7813 164.75 37.5C164.75 20.2188 150.781 6.25 133.5 6.25ZM133.5 62.5C119.719 62.5 108.5 51.2813 108.5 37.5C108.5 23.7188 119.719 12.5 133.5 12.5C147.281 12.5 158.5 23.7188 158.5 37.5C158.5 51.2813 147.281 62.5 133.5 62.5Z" fill="#343434" />
                <path d="M129.917 30.3335H126.333V37.5002H119.167V41.0835H126.333V48.2502H129.917V41.0835H137.083V37.5002H129.917V30.3335ZM137.979 26.8935V30.1543L142.458 29.2585V48.2502H146.042V24.9585L137.979 26.8935Z" fill="#343434" />
              </svg>
            </div>
            <div className="steps__item-info">
              <Text As='h3' className='steps__item-num' size={48} font='Lora' color='#fff'>4</Text>
              <Text size={28} font='Lora' weight={400} className="steps__item-text">Если заявка будет одобрена, вам на почту придёт уведомление и история ветерана появится на сайте</Text>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
}
