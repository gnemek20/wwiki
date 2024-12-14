import styles from '@/styles/wallpaper.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { CSSProperties } from 'react';

const Wallpaper = (props: {
  src: StaticImport,
  alt: string,
  styles?: CSSProperties
}) => {
  return (
    <div className={`${styles.pageBackground}`}>
      <Image src={props.src} alt={props.alt} style={props.styles} />
    </div>
  );
}

export default Wallpaper;