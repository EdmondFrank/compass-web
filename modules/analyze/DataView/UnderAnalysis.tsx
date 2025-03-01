import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UnderAnalysis = () => (
  <div className="flex flex-1 flex-col items-center justify-center md:px-4 md:py-20">
    <div className="mb-4">
      <Image
        src="/images/analyze/padding.gif"
        width={79}
        height={60}
        alt={'padding'}
      />
    </div>
    <p className="mb-2">
      The current project is under analysis, please visit later.
    </p>
    <Link href={'/'}>
      <a className="text-blue-600">Explore other projects</a>
    </Link>
  </div>
);

export default UnderAnalysis;
