import './footer.css';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='footer'>
      <Container flex>
        <div className="footer__icons">
          <svg width="330" height="105" viewBox="0 0 330 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.857 41.5698C41.4134 41.5698 41.9065 41.78 42.3365 42.2002L46.3577 46.4648C44.1321 49.1595 41.3881 51.2237 38.1256 52.6576C34.8884 54.0915 30.9936 54.8084 26.4413 54.8084C22.3695 54.8084 18.7024 54.1286 15.4399 52.7689C12.2027 51.4091 9.4334 49.5179 7.13195 47.0952C4.83051 44.6724 3.06016 41.78 1.82092 38.4178C0.606974 35.0556 0 31.3844 0 27.4042C0 23.3745 0.657556 19.691 1.97267 16.3535C3.28778 12.9913 5.13399 10.0989 7.51131 7.67614C9.91392 5.2534 12.7718 3.37454 16.0848 2.03955C19.3979 0.679851 23.065 0 27.0862 0C31.0822 0 34.6228 0.642768 37.7083 1.9283C40.819 3.21384 43.4619 4.89493 45.6369 6.97157L42.2227 11.6069C42.0203 11.9036 41.7548 12.1632 41.426 12.3857C41.1225 12.6082 40.6926 12.7194 40.1362 12.7194C39.7568 12.7194 39.3648 12.6205 38.9602 12.4227C38.5555 12.2002 38.1129 11.9407 37.6324 11.644C37.1519 11.3226 36.5955 10.9765 35.9632 10.6057C35.331 10.2349 34.5975 9.90111 33.763 9.60445C32.9284 9.28306 31.9547 9.02348 30.8419 8.82571C29.7544 8.60321 28.4899 8.49196 27.0483 8.49196C24.5951 8.49196 22.3442 8.9246 20.2957 9.78986C18.2725 10.6304 16.5274 11.8665 15.0606 13.4981C13.5937 15.1051 12.4556 17.0828 11.6463 19.4314C10.837 21.7553 10.4324 24.4129 10.4324 27.4042C10.4324 30.4203 10.8623 33.1026 11.7222 35.4512C12.6074 37.7998 13.796 39.7775 15.2882 41.3844C16.7803 42.9913 18.538 44.2274 20.5613 45.0927C22.5845 45.9333 24.7595 46.3535 27.0862 46.3535C28.4772 46.3535 29.7291 46.2794 30.8419 46.131C31.98 45.9827 33.0169 45.7478 33.9526 45.4265C34.9137 45.1051 35.8115 44.6972 36.6461 44.2027C37.506 43.6836 38.3532 43.0532 39.1878 42.3115C39.4407 42.089 39.7062 41.916 39.9844 41.7923C40.2626 41.644 40.5535 41.5698 40.857 41.5698Z" fill="white" />
            <path d="M86.6972 16.1681V54.2151H77.327V32.0025C77.327 31.4339 77.3523 30.8158 77.4029 30.1483C77.4788 29.4561 77.5673 28.7639 77.6684 28.0717C77.1626 29.2089 76.6062 30.2101 75.9993 31.0754C75.9487 31.1248 75.6958 31.471 75.2405 32.1137C74.7853 32.7318 74.191 33.5352 73.4576 34.5241C72.7494 35.513 71.9401 36.6378 71.0297 37.8986C70.1192 39.1347 69.1961 40.3956 68.2603 41.6811C66.06 44.7219 63.5689 48.1582 60.787 51.9901C60.4329 52.5093 59.965 53.0161 59.3833 53.5105C58.8269 54.0049 58.182 54.2522 57.4486 54.2522H51.7203V16.2052H61.0904V38.4178C61.0904 38.9864 61.0525 39.6168 60.9766 40.309C60.9261 40.9765 60.8502 41.6564 60.749 42.3486C61.3054 41.1372 61.8618 40.136 62.4182 39.3449C62.4435 39.2954 62.6838 38.9617 63.139 38.3436C63.5942 37.7256 64.1759 36.9221 64.884 35.9333C65.6175 34.9444 66.4394 33.8319 67.3499 32.5958C68.2603 31.335 69.1834 30.0494 70.1192 28.7392C72.3195 25.6984 74.8232 22.2621 77.6305 18.4302C77.9846 17.8863 78.4524 17.3795 79.0341 16.9098C79.6158 16.4153 80.2734 16.1681 81.0068 16.1681H86.6972Z" fill="white" />
            <path d="M105.324 44.3511C106.387 45.6119 107.537 46.5019 108.776 47.021C110.041 47.5402 111.407 47.7998 112.874 47.7998C114.29 47.7998 115.567 47.5402 116.705 47.021C117.843 46.5019 118.804 45.7108 119.588 44.6477C120.397 43.5847 121.017 42.2497 121.447 40.6428C121.877 39.0111 122.092 37.0952 122.092 34.8949C122.092 32.67 121.902 30.7911 121.523 29.2583C121.169 27.7009 120.65 26.44 119.968 25.4759C119.285 24.5117 118.45 23.8072 117.464 23.3622C116.503 22.9172 115.403 22.6947 114.163 22.6947C112.216 22.6947 110.559 23.1026 109.194 23.9184C107.828 24.7095 106.538 25.8344 105.324 27.293V44.3511ZM104.831 21.3597C106.424 19.6045 108.233 18.1829 110.256 17.0952C112.279 16.0074 114.657 15.4635 117.388 15.4635C119.512 15.4635 121.447 15.8962 123.192 16.7614C124.962 17.6267 126.48 18.8875 127.744 20.5439C129.034 22.1755 130.021 24.2027 130.703 26.6255C131.412 29.0235 131.766 31.78 131.766 34.8949C131.766 37.7379 131.374 40.3708 130.59 42.7936C129.806 45.2163 128.68 47.3177 127.213 49.0977C125.772 50.8776 124.014 52.2744 121.94 53.288C119.892 54.2769 117.59 54.7713 115.036 54.7713C112.861 54.7713 111.002 54.4499 109.459 53.8072C107.917 53.1397 106.538 52.225 105.324 51.063V66.6378H95.9541V16.1681H101.682C102.896 16.1681 103.693 16.7243 104.072 17.8368L104.831 21.3597Z" fill="white" />
            <path d="M173.979 16.1681V54.2151H164.609V32.0025C164.609 31.4339 164.635 30.8158 164.685 30.1483C164.761 29.4561 164.849 28.7639 164.951 28.0717C164.445 29.2089 163.888 30.2101 163.281 31.0754C163.231 31.1248 162.978 31.471 162.523 32.1137C162.068 32.7318 161.473 33.5352 160.74 34.5241C160.032 35.513 159.222 36.6378 158.312 37.8986C157.401 39.1347 156.478 40.3956 155.543 41.6811C153.342 44.7219 150.851 48.1582 148.069 51.9901C147.715 52.5093 147.247 53.0161 146.666 53.5105C146.109 54.0049 145.464 54.2522 144.731 54.2522H139.002V16.2052H148.373V38.4178C148.373 38.9864 148.335 39.6168 148.259 40.309C148.208 40.9765 148.132 41.6564 148.031 42.3486C148.588 41.1372 149.144 40.136 149.7 39.3449C149.726 39.2954 149.966 38.9617 150.421 38.3436C150.876 37.7256 151.458 36.9221 152.166 35.9333C152.9 34.9444 153.722 33.8319 154.632 32.5958C155.543 31.335 156.466 30.0494 157.401 28.7392C159.602 25.6984 162.105 22.2621 164.913 18.4302C165.267 17.8863 165.735 17.3795 166.316 16.9098C166.898 16.4153 167.556 16.1681 168.289 16.1681H173.979Z" fill="white" />
            <path d="M218.593 16.1681L197.386 64.6724C197.108 65.3152 196.742 65.7973 196.286 66.1187C195.856 66.4648 195.186 66.6378 194.276 66.6378H187.295L194.579 51.3597L178.836 16.1681H187.068C187.801 16.1681 188.37 16.3412 188.775 16.6873C189.205 17.0334 189.521 17.4289 189.723 17.8739L197.993 37.602C198.272 38.2695 198.499 38.937 198.676 39.6045C198.879 40.2719 199.068 40.9518 199.245 41.644C199.473 40.9518 199.701 40.2719 199.928 39.6045C200.156 38.9122 200.409 38.2324 200.687 37.5649L208.502 17.8739C208.704 17.3795 209.033 16.9716 209.488 16.6502C209.969 16.3288 210.5 16.1681 211.081 16.1681H218.593Z" fill="white" />
            <path d="M249.944 24.2151C249.666 24.5612 249.388 24.8331 249.11 25.0309C248.857 25.2287 248.477 25.3276 247.972 25.3276C247.491 25.3276 247.023 25.1916 246.568 24.9197C246.113 24.623 245.569 24.3016 244.937 23.9555C244.304 23.5847 243.546 23.2633 242.661 22.9913C241.801 22.6947 240.726 22.5464 239.436 22.5464C237.792 22.5464 236.351 22.843 235.111 23.4363C233.872 24.0049 232.835 24.8331 232.001 25.9209C231.191 27.0087 230.584 28.3313 230.18 29.8888C229.775 31.4215 229.573 33.1644 229.573 35.1174C229.573 37.1446 229.788 38.9493 230.218 40.5315C230.673 42.1137 231.318 43.4487 232.152 44.5365C232.987 45.5995 233.999 46.4153 235.187 46.9839C236.376 47.5278 237.716 47.7998 239.208 47.7998C240.701 47.7998 241.902 47.6267 242.812 47.2806C243.748 46.9098 244.532 46.5142 245.164 46.0939C245.797 45.649 246.34 45.2534 246.796 44.9073C247.276 44.5365 247.807 44.3511 248.389 44.3511C249.148 44.3511 249.717 44.6354 250.096 45.204L252.789 48.5414C251.753 49.7281 250.627 50.7293 249.413 51.5451C248.199 52.3362 246.935 52.979 245.62 53.4734C244.33 53.9431 242.989 54.2769 241.598 54.4747C240.233 54.6724 238.867 54.7713 237.501 54.7713C235.099 54.7713 232.835 54.3387 230.711 53.4734C228.586 52.5834 226.727 51.2979 225.134 49.6168C223.541 47.9357 222.276 45.8838 221.341 43.4611C220.43 41.0136 219.975 38.2324 219.975 35.1174C219.975 32.3239 220.38 29.7404 221.189 27.3671C222.023 24.9691 223.237 22.9048 224.831 21.1743C226.424 19.419 228.397 18.047 230.749 17.0581C233.101 16.0692 235.807 15.5748 238.867 15.5748C241.775 15.5748 244.317 16.0321 246.492 16.9468C248.692 17.8616 250.665 19.1718 252.41 20.8776L249.944 24.2151Z" fill="white" />
            <path d="M9.59778 95.2843C10.5968 95.2843 11.4377 95.1792 12.1205 94.9691C12.816 94.7466 13.3787 94.4438 13.8087 94.0606C14.2386 93.665 14.5484 93.2077 14.7381 92.6885C14.9404 92.157 15.0416 91.5822 15.0416 90.9642C15.0416 90.2967 14.9467 89.6972 14.7571 89.1656C14.5674 88.6341 14.2576 88.1891 13.8276 87.8307C13.3977 87.4598 12.835 87.1755 12.1395 86.9778C11.4566 86.78 10.6157 86.6811 9.61675 86.6811H4.76096V95.2843H9.59778ZM9.61675 83.2509C11.3365 83.2509 12.8097 83.4363 14.0363 83.8072C15.2755 84.178 16.2935 84.691 17.0901 85.3461C17.8868 85.9889 18.4685 86.7553 18.8352 87.6452C19.2145 88.5352 19.4042 89.4932 19.4042 90.5192C19.4042 91.7676 19.1829 92.8986 18.7403 93.9122C18.3104 94.9135 17.6781 95.7726 16.8435 96.4895C16.009 97.2064 14.9784 97.7565 13.7518 98.1397C12.5378 98.5229 11.1532 98.7145 9.59778 98.7145H0.322455V72.0148H18.4558V75.4079H4.76096V83.2509H9.61675Z" fill="white" />
            <path d="M35.8891 87.1261C35.8891 86.4586 35.788 85.8405 35.5857 85.2719C35.396 84.691 35.1115 84.1904 34.7321 83.7701C34.3527 83.3375 33.8785 83.0037 33.3095 82.7689C32.7531 82.5216 32.1082 82.398 31.3748 82.398C29.8953 82.398 28.7319 82.8121 27.8847 83.6403C27.0374 84.4685 26.5 85.6304 26.2724 87.1261H35.8891ZM26.1586 89.5735C26.2092 90.6489 26.3799 91.5822 26.6707 92.3733C26.9616 93.152 27.3472 93.801 27.8278 94.3202C28.3209 94.8393 28.9026 95.2287 29.5728 95.4883C30.2557 95.7355 31.0144 95.8591 31.849 95.8591C32.6456 95.8591 33.3348 95.7726 33.9165 95.5995C34.4982 95.4141 35.004 95.2163 35.4339 95.0062C35.8639 94.7837 36.2306 94.5859 36.5341 94.4129C36.8375 94.2274 37.1157 94.1347 37.3686 94.1347C37.6974 94.1347 37.9503 94.2583 38.1274 94.5056L39.2844 95.9703C38.8039 96.5266 38.2601 96.9963 37.6532 97.3795C37.0462 97.7627 36.4013 98.0779 35.7184 98.3251C35.0356 98.56 34.3338 98.7268 33.613 98.8257C32.8922 98.937 32.1904 98.9926 31.5075 98.9926C30.1671 98.9926 28.9216 98.7763 27.7709 98.3436C26.6328 97.8986 25.6401 97.2497 24.7929 96.3968C23.9583 95.5439 23.3007 94.487 22.8202 93.2262C22.3523 91.9654 22.1184 90.513 22.1184 88.869C22.1184 87.5587 22.3271 86.335 22.7444 85.1978C23.1743 84.0606 23.7813 83.0717 24.5653 82.2312C25.3619 81.3906 26.323 80.7293 27.4484 80.2472C28.5865 79.7528 29.87 79.5056 31.2989 79.5056C32.4876 79.5056 33.5877 79.6972 34.5993 80.0804C35.6109 80.4512 36.4835 81.0012 37.2169 81.7305C37.9503 82.4598 38.5194 83.356 38.924 84.419C39.3413 85.4697 39.55 86.6687 39.55 88.0161C39.55 88.6341 39.4804 89.0482 39.3413 89.2583C39.2022 89.4685 38.9493 89.5735 38.5826 89.5735H26.1586Z" fill="white" />
            <path d="M57.0289 83.5105C56.9025 83.6712 56.7823 83.7948 56.6685 83.8813C56.5547 83.9679 56.3903 84.0111 56.1754 84.0111C55.9604 84.0111 55.7328 83.937 55.4925 83.7886C55.2649 83.6403 54.9867 83.4796 54.6579 83.3065C54.3418 83.1211 53.9561 82.9543 53.5009 82.8059C53.0457 82.6576 52.4766 82.5834 51.7938 82.5834C50.9086 82.5834 50.1309 82.7379 49.4607 83.047C48.8032 83.356 48.2468 83.801 47.7915 84.382C47.3489 84.9506 47.0138 85.6489 46.7862 86.4771C46.5713 87.293 46.4638 88.2138 46.4638 89.2398C46.4638 90.3028 46.5839 91.2485 46.8242 92.0766C47.0644 92.9048 47.4059 93.6032 47.8484 94.1718C48.3037 94.7404 48.8474 95.1731 49.4797 95.4697C50.1246 95.7664 50.8454 95.9147 51.642 95.9147C52.426 95.9147 53.0646 95.822 53.5578 95.6366C54.051 95.4512 54.4619 95.2472 54.7907 95.0247C55.1195 94.8022 55.3977 94.5983 55.6253 94.4129C55.8656 94.2274 56.1185 94.1347 56.384 94.1347C56.7128 94.1347 56.9657 94.2583 57.1427 94.5056L58.2998 95.9703C57.8319 96.5266 57.3134 96.9963 56.7444 97.3795C56.1754 97.7627 55.5747 98.0779 54.9425 98.3251C54.3102 98.56 53.6526 98.7268 52.9698 98.8257C52.2869 98.937 51.5978 98.9926 50.9023 98.9926C49.701 98.9926 48.5755 98.7763 47.526 98.3436C46.4891 97.8986 45.5786 97.2621 44.7946 96.4339C44.0232 95.5933 43.4099 94.5736 42.9547 93.3745C42.5121 92.1632 42.2908 90.7849 42.2908 89.2398C42.2908 87.843 42.4932 86.5513 42.8978 85.3646C43.3025 84.1656 43.8905 83.1335 44.6618 82.2682C45.4458 81.403 46.4132 80.7293 47.5639 80.2472C48.7146 79.7528 50.0424 79.5056 51.5472 79.5056C52.9508 79.5056 54.1837 79.7281 55.2459 80.1731C56.3208 80.618 57.2755 81.2485 58.1101 82.0643L57.0289 83.5105Z" fill="white" />
            <path d="M74.9225 83.5105C74.7961 83.6712 74.6759 83.7948 74.5621 83.8813C74.4483 83.9679 74.2839 84.0111 74.069 84.0111C73.854 84.0111 73.6264 83.937 73.3861 83.7886C73.1585 83.6403 72.8803 83.4796 72.5515 83.3065C72.2354 83.1211 71.8497 82.9543 71.3945 82.8059C70.9393 82.6576 70.3702 82.5834 69.6874 82.5834C68.8022 82.5834 68.0245 82.7379 67.3543 83.047C66.6968 83.356 66.1404 83.801 65.6851 84.382C65.2425 84.9506 64.9074 85.6489 64.6798 86.4771C64.4649 87.293 64.3574 88.2138 64.3574 89.2398C64.3574 90.3028 64.4775 91.2485 64.7178 92.0766C64.958 92.9048 65.2994 93.6032 65.742 94.1718C66.1973 94.7404 66.741 95.1731 67.3733 95.4697C68.0182 95.7664 68.739 95.9147 69.5356 95.9147C70.3196 95.9147 70.9582 95.822 71.4514 95.6366C71.9445 95.4512 72.3555 95.2472 72.6843 95.0247C73.0131 94.8022 73.2913 94.5983 73.5189 94.4129C73.7592 94.2274 74.0121 94.1347 74.2776 94.1347C74.6064 94.1347 74.8593 94.2583 75.0363 94.5056L76.1934 95.9703C75.7255 96.5266 75.207 96.9963 74.638 97.3795C74.069 97.7627 73.4683 98.0779 72.8361 98.3251C72.2038 98.56 71.5462 98.7268 70.8634 98.8257C70.1805 98.937 69.4914 98.9926 68.7959 98.9926C67.5946 98.9926 66.4691 98.7763 65.4196 98.3436C64.3827 97.8986 63.4722 97.2621 62.6882 96.4339C61.9168 95.5933 61.3035 94.5736 60.8483 93.3745C60.4057 92.1632 60.1844 90.7849 60.1844 89.2398C60.1844 87.843 60.3867 86.5513 60.7914 85.3646C61.196 84.1656 61.7841 83.1335 62.5554 82.2682C63.3394 81.403 64.3068 80.7293 65.4575 80.2472C66.6082 79.7528 67.936 79.5056 69.4408 79.5056C70.8444 79.5056 72.0773 79.7281 73.1395 80.1731C74.2144 80.618 75.1691 81.2485 76.0037 82.0643L74.9225 83.5105Z" fill="white" />
            <path d="M101.476 79.7466V98.7145H97.8157V87.2744C97.8157 86.8789 97.841 86.4339 97.8915 85.9394C97.9421 85.4326 98.0053 84.9629 98.0812 84.5303L91.9166 95.3585C91.7902 95.581 91.6258 95.7602 91.4235 95.8962C91.2211 96.0198 90.9935 96.0816 90.7406 96.0816H90.3044C90.0514 96.0816 89.8238 96.0198 89.6215 95.8962C89.4318 95.7602 89.2738 95.581 89.1473 95.3585L82.8689 84.4747C82.9448 84.9073 83.008 85.3832 83.0586 85.9024C83.1218 86.4092 83.1534 86.8665 83.1534 87.2744V98.7145H79.4736V79.7466H82.812C83.0902 79.7466 83.3621 79.8084 83.6276 79.932C83.9058 80.0556 84.1461 80.2967 84.3484 80.6551L89.6025 89.4438C89.7796 89.7651 89.9376 90.1113 90.0767 90.4821C90.2285 90.8529 90.3739 91.2237 90.513 91.5946C90.6521 91.2237 90.7975 90.8529 90.9493 90.4821C91.101 90.1113 91.2654 89.7651 91.4424 89.4438L96.6207 80.6551C96.8104 80.2843 97.0443 80.0433 97.3225 79.932C97.6007 79.8084 97.8789 79.7466 98.1571 79.7466H101.476Z" fill="white" />
            <path d="M119.17 87.1261C119.17 86.4586 119.069 85.8405 118.867 85.2719C118.677 84.691 118.393 84.1904 118.013 83.7701C117.634 83.3375 117.16 83.0037 116.591 82.7689C116.034 82.5216 115.389 82.398 114.656 82.398C113.176 82.398 112.013 82.8121 111.166 83.6403C110.319 84.4685 109.781 85.6304 109.554 87.1261H119.17ZM109.44 89.5735C109.49 90.6489 109.661 91.5822 109.952 92.3733C110.243 93.152 110.628 93.801 111.109 94.3202C111.602 94.8393 112.184 95.2287 112.854 95.4883C113.537 95.7355 114.296 95.8591 115.13 95.8591C115.927 95.8591 116.616 95.7726 117.198 95.5995C117.779 95.4141 118.285 95.2163 118.715 95.0062C119.145 94.7837 119.512 94.5859 119.815 94.4129C120.119 94.2274 120.397 94.1347 120.65 94.1347C120.979 94.1347 121.231 94.2583 121.409 94.5056L122.566 95.9703C122.085 96.5266 121.541 96.9963 120.934 97.3795C120.327 97.7627 119.682 98.0779 119 98.3251C118.317 98.56 117.615 98.7268 116.894 98.8257C116.173 98.937 115.472 98.9926 114.789 98.9926C113.448 98.9926 112.203 98.7763 111.052 98.3436C109.914 97.8986 108.921 97.2497 108.074 96.3968C107.239 95.5439 106.582 94.487 106.101 93.2262C105.634 91.9654 105.4 90.513 105.4 88.869C105.4 87.5587 105.608 86.335 106.026 85.1978C106.455 84.0606 107.062 83.0717 107.846 82.2312C108.643 81.3906 109.604 80.7293 110.73 80.2472C111.868 79.7528 113.151 79.5056 114.58 79.5056C115.769 79.5056 116.869 79.6972 117.88 80.0804C118.892 80.4512 119.765 81.0012 120.498 81.7305C121.231 82.4598 121.801 83.356 122.205 84.419C122.622 85.4697 122.831 86.6687 122.831 88.0161C122.831 88.6341 122.762 89.0482 122.622 89.2583C122.483 89.4685 122.23 89.5735 121.864 89.5735H109.44Z" fill="white" />
            <path d="M130.712 93.9679C131.281 94.6848 131.901 95.1916 132.571 95.4883C133.254 95.7726 134.006 95.9147 134.828 95.9147C136.422 95.9147 137.661 95.3461 138.546 94.2089C139.444 93.0717 139.893 91.3783 139.893 89.1286C139.893 87.9666 139.792 86.9778 139.589 86.1619C139.387 85.3338 139.096 84.6601 138.717 84.1409C138.337 83.6218 137.876 83.2448 137.332 83.0099C136.788 82.775 136.175 82.6576 135.492 82.6576C134.455 82.6576 133.558 82.8801 132.799 83.3251C132.053 83.7577 131.357 84.382 130.712 85.1978V93.9679ZM130.504 82.5464C131.313 81.6193 132.23 80.8714 133.254 80.3028C134.291 79.7342 135.492 79.4499 136.858 79.4499C137.945 79.4499 138.932 79.6663 139.817 80.0989C140.702 80.5192 141.461 81.1372 142.093 81.953C142.725 82.7689 143.212 83.7825 143.554 84.9938C143.908 86.1928 144.085 87.5711 144.085 89.1286C144.085 90.5253 143.889 91.8294 143.497 93.0408C143.117 94.2398 142.567 95.2843 141.846 96.1743C141.126 97.0519 140.253 97.7441 139.229 98.2509C138.205 98.7454 137.048 98.9926 135.758 98.9926C134.62 98.9926 133.652 98.8134 132.856 98.4549C132.072 98.0964 131.357 97.602 130.712 96.9716V105H126.634V79.8022H129.1C129.656 79.8022 130.01 80.0556 130.162 80.5624L130.504 82.5464Z" fill="white" />
            <path d="M163.953 82.8059H156.821V98.7145H152.743V82.8059H145.592V79.8022H163.953V82.8059Z" fill="white" />
            <path d="M183.443 79.8022V98.7145H179.384V90.1298H171.019V98.7145H166.941V79.8022H171.019V87.1261H179.384V79.8022H183.443Z" fill="white" />
            <path d="M196.11 95.822C196.705 95.822 197.223 95.7478 197.666 95.5995C198.121 95.4388 198.494 95.2287 198.785 94.9691C199.088 94.6972 199.31 94.3758 199.449 94.005C199.6 93.6341 199.676 93.2262 199.676 92.7812C199.676 92.3857 199.607 92.0148 199.468 91.6687C199.341 91.3103 199.132 91.0012 198.842 90.7417C198.563 90.4697 198.197 90.2596 197.742 90.1113C197.286 89.9506 196.73 89.8702 196.072 89.8702H192.298V95.822H196.11ZM196.053 86.9963C197.394 86.9963 198.525 87.157 199.449 87.4784C200.372 87.7874 201.118 88.2077 201.687 88.7392C202.256 89.2707 202.667 89.8888 202.92 90.5933C203.173 91.2855 203.299 92.0087 203.299 92.7627C203.299 93.6403 203.141 94.4438 202.825 95.1731C202.509 95.89 202.041 96.5142 201.421 97.0457C200.814 97.5773 200.062 97.9913 199.164 98.288C198.279 98.5723 197.261 98.7145 196.11 98.7145H188.428V79.8022H192.298V86.9963H196.053ZM211.228 79.8022V98.7145H207.15V79.8022H211.228Z" fill="white" />
            <path d="M233.228 79.8022V98.7145H229.149V86.8665C229.149 86.6069 229.162 86.3226 229.187 86.0136C229.213 85.7046 229.251 85.3894 229.301 85.068C229.175 85.3399 229.048 85.5933 228.922 85.8282C228.808 86.0507 228.682 86.2546 228.542 86.4401L220.14 97.7318C219.988 97.9666 219.786 98.1953 219.533 98.4178C219.28 98.6279 218.995 98.733 218.679 98.733H216.213V79.8022H220.291V91.6502C220.291 91.9098 220.272 92.2002 220.235 92.5216C220.209 92.843 220.171 93.1644 220.121 93.4858C220.374 92.9172 220.633 92.4475 220.898 92.0766L229.301 80.8035C229.453 80.5563 229.655 80.3276 229.908 80.1174C230.161 79.9073 230.446 79.8022 230.762 79.8022H233.228ZM224.958 75.0927C225.451 75.0927 225.862 75.0433 226.19 74.9444C226.532 74.8331 226.804 74.6601 227.006 74.4252C227.208 74.178 227.354 73.8628 227.442 73.4796C227.531 73.0841 227.575 72.5958 227.575 72.0148H229.965C230.256 72.0148 230.471 72.1384 230.61 72.3857C230.749 72.6205 230.819 72.8801 230.819 73.1644C230.819 73.7948 230.68 74.3634 230.401 74.8702C230.136 75.3646 229.75 75.7911 229.244 76.1496C228.739 76.4957 228.119 76.7676 227.385 76.9654C226.665 77.1508 225.855 77.2435 224.958 77.2435C224.06 77.2435 223.244 77.1508 222.511 76.9654C221.79 76.7676 221.177 76.4957 220.671 76.1496C220.165 75.7911 219.773 75.3646 219.495 74.8702C219.229 74.3634 219.096 73.7948 219.096 73.1644C219.096 72.8801 219.166 72.6205 219.305 72.3857C219.444 72.1384 219.659 72.0148 219.95 72.0148H222.34C222.34 72.5958 222.384 73.0841 222.473 73.4796C222.561 73.8628 222.707 74.178 222.909 74.4252C223.111 74.6601 223.377 74.8331 223.706 74.9444C224.047 75.0433 224.464 75.0927 224.958 75.0927Z" fill="white" />
            <path d="M264.131 98.7145H260.072V82.8059H251.707V98.7145H247.629V79.8022H264.131V98.7145Z" fill="white" />
            <path d="M277.481 79.5056C278.91 79.5056 280.2 79.7342 281.35 80.1916C282.514 80.649 283.5 81.2979 284.309 82.1384C285.131 82.979 285.764 83.9988 286.206 85.1978C286.649 86.3968 286.87 87.7441 286.87 89.2398C286.87 90.7355 286.649 92.0828 286.206 93.2818C285.764 94.4809 285.131 95.5068 284.309 96.3597C283.5 97.2003 282.514 97.8492 281.35 98.3066C280.2 98.7639 278.91 98.9926 277.481 98.9926C276.039 98.9926 274.737 98.7639 273.574 98.3066C272.423 97.8492 271.437 97.2003 270.615 96.3597C269.793 95.5068 269.16 94.4809 268.718 93.2818C268.275 92.0828 268.054 90.7355 268.054 89.2398C268.054 87.7441 268.275 86.3968 268.718 85.1978C269.16 83.9988 269.793 82.979 270.615 82.1384C271.437 81.2979 272.423 80.649 273.574 80.1916C274.737 79.7342 276.039 79.5056 277.481 79.5056ZM277.481 95.8776C279.226 95.8776 280.522 95.309 281.369 94.1718C282.229 93.0222 282.659 91.3844 282.659 89.2583C282.659 87.1323 282.229 85.4944 281.369 84.3449C280.522 83.1829 279.226 82.602 277.481 82.602C275.711 82.602 274.396 83.1829 273.536 84.3449C272.676 85.4944 272.246 87.1323 272.246 89.2583C272.246 91.3844 272.676 93.0222 273.536 94.1718C274.396 95.309 275.711 95.8776 277.481 95.8776Z" fill="white" />
            <path d="M307.758 98.7145H303.68V82.8986H298.293C298.142 85.2596 297.908 87.2991 297.591 89.0173C297.288 90.7231 296.921 92.1693 296.491 93.356C296.061 94.5426 295.581 95.5068 295.05 96.2485C294.519 96.9778 293.956 97.5464 293.362 97.9543C292.767 98.3622 292.154 98.6341 291.522 98.7701C290.902 98.9061 290.276 98.974 289.644 98.974C288.417 98.974 287.804 98.7763 287.804 98.3807V95.8776H288.866C289.284 95.8776 289.707 95.8096 290.137 95.6737C290.58 95.5377 291.003 95.2719 291.408 94.8764C291.813 94.4685 292.198 93.8999 292.565 93.1706C292.944 92.4413 293.286 91.4833 293.589 90.2967C293.905 89.0977 294.177 87.6452 294.405 85.9394C294.632 84.2213 294.81 82.1755 294.936 79.8022H307.758V98.7145Z" fill="white" />
            <path d="M324.367 80.8776C324.569 80.5562 324.841 80.2967 325.182 80.0989C325.536 79.9011 325.903 79.8022 326.282 79.8022H329.469L324.708 86.9036C324.404 87.3857 324.088 87.775 323.76 88.0717C323.431 88.3684 323.026 88.597 322.546 88.7577C323.165 88.9308 323.677 89.1965 324.082 89.555C324.499 89.9011 324.872 90.3523 325.201 90.9085L330 98.7145H327.193C326.472 98.7145 325.909 98.597 325.505 98.3622C325.113 98.1273 324.777 97.7812 324.499 97.3239L321.218 91.7985C320.952 91.3288 320.605 90.9827 320.175 90.7602C319.745 90.5377 319.258 90.4265 318.714 90.4265H316.798V98.733H312.72V79.8022H316.798V87.7565H318.449C318.98 87.7565 319.422 87.6576 319.776 87.4598C320.13 87.2621 320.434 86.9592 320.687 86.5513L324.367 80.8776Z" fill="white" />
          </svg>
        
        </div>
        <ul className="footer__links">
          <li className="footer__links-item">
            <Link to={'/'}>
              <Text size={36} font='Lora' color='#fff' As='span'>Главная</Text>
            </Link>
          </li>
          <li className="footer__links-item">
            <Link to={'/gallary'}>
              <Text size={36} font='Lora' color='#fff' As='span'>Галерея</Text>
            </Link>
          </li>
          <li className="footer__links-item">
            <Link to={'/histories'}>
              <Text size={36} font='Lora' color='#fff' As='span'>Истории</Text>
            </Link>
          </li>
        </ul>
        <div className="footer__contacts">
          <Text size={24} font='Lora' color='#fff'><a href='mailto:info@полксириус.рф'>info@полксириус.рф</a></Text>
        </div>
      </Container>
    </footer>
  );
}
