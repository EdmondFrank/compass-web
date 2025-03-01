import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';

const SubmitYouProject: React.FC<{ blackMode?: boolean }> = ({ blackMode }) => {
  const router = useRouter();
  if (router.pathname === '/submit-your-project') {
    return null;
  }

  return (
    <Link href="/submit-your-project">
      <a
        className={
          'cursor-pointer border-2 border-white bg-black px-6 py-3 font-semibold text-white'
        }
      >
        Submit your project
      </a>
    </Link>
  );
};

export default SubmitYouProject;
