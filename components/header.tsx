import { pageReload, routerPush } from '@/functions/default';
import styles from '@/styles/header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { KeyboardEvent, useState } from 'react';

const userIcon = {
  src: require('@/public/icons/user.svg'),
  alt: 'user'
}

const wallpaperImage = {
  src: require('@/public/images/developmentDay.jpg'),
  alt: 'wallpaper'
}

const Header = () => {
  const router = useRouter();

  const [searchWord, setSearchWord] = useState<string>('');

  const search = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const word = searchWord;
    const query = { target: word }

    if (key === 'Enter') {
      if (word.replace(/ /g, '') === '') routerPush(router, '/', { shallow: true });
      else routerPush(router, '/content', { query: query });
    }
  }

  return (
    <div className={`${styles.headerBackground}`}>
      <div className={`${styles.headerWallpaper}`}>
        <Image src={wallpaperImage.src} alt={wallpaperImage.alt} />
      </div>
      <div className={`${styles.headerContainer}`}>
        <div className={`${styles.headerTitle}`} onClick={() => pageReload()}>
          <h2>짜바리 위키</h2>
        </div>
        <div className={`${styles.headerSearchbox}`}>
          <input type="text" placeholder='검색어를 입력하세요' spellCheck={false} onChange={(event) => setSearchWord(event.target.value)} onKeyDown={(event) => search(event)} />
        </div>
        <div className={`${styles.headerUser}`} onClick={() => routerPush(router, '/signin')}>
          <Image src={userIcon.src} alt={userIcon.alt} />
        </div>
      </div>
    </div>
  );
}

export default Header;