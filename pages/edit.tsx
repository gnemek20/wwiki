import { Header } from "@/components";
import { routerBack } from "@/functions/default";
import styles from '@/styles/edit.module.css';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

const Edit = (props: {
  target: InferGetServerSidePropsType<typeof getServerSideProps>
}) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className={`${styles.templateContainer}`}>
        <div className={`${styles.topContainer}`}>
          <div className={`${styles.topTitle}`}>
            <h1>임시 제목</h1>
            <p>편집 페이지</p>
          </div>
          <div className={`${styles.topOption}`}>
            <div className={`${styles.editButton}`}>
              <button>제거</button>
              <button onClick={() => routerBack(router)}>취소</button>
            </div>
          </div>
        </div>
        <div>
          <div className={`${styles.editWrapper}`}>
            <textarea rows={15} />
          </div>
        </div>
        <div className={`${styles.bottomOption}`}>
          <div className={`${styles.editButton}`}>
            <button>저장</button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { target } = context.query;

    return {
      props: {
        targetJson: target ? target : null
      }
    }
  }
  catch (error) {
    return {
      props: {
        targetJson: null
      }
    }
  }
}


export default Edit;