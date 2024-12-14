import { Header, Template } from '@/components';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const Content = (props: {
  target: InferGetServerSidePropsType<typeof getServerSideProps>
}) => {

  return (
    <>
      <Header />
      <Template />
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

export default Content;