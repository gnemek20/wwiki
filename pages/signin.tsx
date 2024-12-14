import { Wallpaper } from '@/components';
import { routerBack, routerReplace } from '@/functions/default';
import styles from '@/styles/sign.module.css';
import { useRouter } from 'next/router';

const wallpaperImage = {
  src: require('@/public/images/oceanDay.jpg'),
  alt: 'wallpaper'
}

const SignIn = () => {
  const router = useRouter();

  return (
    <>
      <Wallpaper src={wallpaperImage.src} alt={wallpaperImage.alt} />
      <div className={`${styles.signContainer}`}>
        <div className={`${styles.title}`} onClick={() => routerBack(router)}>
          <h1>짜바리 위키</h1>
          <p>개추를 주는 사람들</p>
        </div>
        <div className={`${styles.form}`}>
          <div className={`${styles.signInput}`}>
            <input type="text" placeholder='아이디' spellCheck={false} />
          </div>
          <div className={`${styles.signInput}`}>
            <input type="password" placeholder='비밀번호' spellCheck={false} />
          </div>
        </div>
        <div className={`${styles.form}`}>
          <div className={`${styles.signButton}`}>
            <button>로그인</button>
          </div>
          <div className={`${styles.signButton}`}>
            <button onClick={() => routerReplace(router, '/signup')}>회원 가입</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;