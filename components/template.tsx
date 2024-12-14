import styles from '@/styles/template.module.css';
import Image from 'next/image';
import Topic from './topic';
import { routerPush } from '@/functions/default';
import { useRouter } from 'next/router';

const profileImage = {
  src: require('@/public/images/developmentDay.jpg'),
  alt: 'profile'
}

const Template = () => {
  const router = useRouter();

  const props = {
    name: '프로젝트: 미유토끼 따먹기',
    lastUpdate: '2024-12-25'
  }

  const profile = [
    {
      '이름': '카스미자와 미유'
    },
    {
      '나이': '15살'
    },
    {
      '신장': '149cm'
    },
    {
      '생일': '7월 12일'
    },
    {
      '취미': '(부정적인) 망상, 현실도피, 조약돌 모으기'
    },
    {
      '일러스트': '유나물'
    }
  ]

  return (
    <div className={`${styles.templateContainer}`}>
      <div className={`${styles.topContainer}`}>
        <div className={`${styles.topTitle}`}>
          <h1>{ props.name }</h1>
          <p>최근 수정 날짜: { props.lastUpdate }</p>
        </div>
        <div className={`${styles.topOption}`}>
          <div className={`${styles.editButton}`}>
            <button onClick={() => routerPush(router, '/edit', { query: { target: props.name } })}>편집</button>
          </div>
        </div>
      </div>
      <div className={`${styles.summary}`}>
        <table className={`${styles.profileContainer}`}>
          <tbody>
            <tr>
              <td className={`${styles.coloredBackground}`} colSpan={2}>
                <p>프로필</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>
                  <Image src={profileImage.src} alt={profileImage.alt} />
                </div>
              </td>
            </tr>
            {
              profile.map((inform, index) => (
                <tr key={index}>
                  <td className={`${styles.coloredBackground}`}>
                    <p>{ Object.keys(inform) }</p>
                  </td>
                  <td>
                    <p>{ Object.values(inform) }</p>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className={`${styles.topicList}`}>
        <Topic />
      </div>
    </div>
  );
}

export default Template;