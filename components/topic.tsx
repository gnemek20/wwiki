import styles from '@/styles/topic.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const arrowIcon = {
  src: require('@/public/icons/arrow.svg'),
  alt: 'arrow'
}

const Topic = () => {
  const topicContentContainerRef = useRef<HTMLDivElement>(null);
  const topicContentWrapperRef = useRef<HTMLDivElement>(null);

  const [toggledTopic, setToggledTopic] = useState<boolean>(true);
  const [topicContentHeight, setTopicContentHeight] = useState<number>(0);

  const content = [
    `으음..`,
    ``,
    `미유는 복슬복슬한 토끼쨩이야?`,
    `에헤헤, 난 미유가 정말 좋아!`
  ].join('\n');

  const toggleTopic = () => {
    const containerTarget = topicContentContainerRef.current;
    const wrapperTarget = topicContentWrapperRef.current;
    let containerStyle, wrapperStyle = '';

    if (toggledTopic) {
      containerStyle = [
        `height: 0px`
      ].join(';');

      wrapperStyle = [
        `transform: translateY(-100%)`
      ].join(';');
    }
    else {
      containerStyle = [
        `height: ${topicContentHeight}px`
      ].join(';');

      wrapperStyle = [
        `transform: translateY(0)`
      ].join(';');
    }
    
    containerTarget?.setAttribute('style', containerStyle);
    wrapperTarget?.setAttribute('style', wrapperStyle);
    setToggledTopic(!toggledTopic);
  }

  useEffect(() => {
    const target = topicContentContainerRef.current;
    const elementHeight = topicContentWrapperRef.current?.clientHeight;

    if (elementHeight) {
      target?.setAttribute('style', `height: ${elementHeight}px;`);
      setTopicContentHeight(elementHeight);
    }
  }, []);

  return (
    <div className={`${styles.topicContainer} ${!toggledTopic && styles.unToggledTopicContainer}`}>
      <div className={`${styles.topicTitle}`} onClick={() => toggleTopic()}>
        <Image className={`${toggledTopic && styles.toggledArrow}`} src={arrowIcon.src} alt={arrowIcon.alt} />
        <h2>토픽</h2>
      </div>
      <hr />
      <div ref={topicContentContainerRef} className={`${styles.topicContentContainer}`}>
        <div ref={topicContentWrapperRef} className={`${styles.topicContentWrapper}`}>
          <p>{ content }</p>
        </div>
      </div>
    </div>
  );
}

export default Topic;