import { Header, Template } from '@/components';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

const Content = (props: {
  target: InferGetServerSidePropsType<typeof getServerSideProps>
}) => {
  const [target, setTarget] = useState<string>('');

  useEffect(() => {
    const target = props.target as any;
    setTarget(target);
  }, [props.target]);

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
        target: target ? target : null
      }
    }
  }
  catch (error) {
    return {
      props: {
        target: null
      }
    }
  }
}

export default Content;