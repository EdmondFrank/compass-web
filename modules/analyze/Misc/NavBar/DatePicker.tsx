import React from 'react';
import classnames from 'classnames';
import useQueryDateRange from '@modules/analyze/hooks/useQueryDateRange';
import useSwitchRange from '@modules/analyze/Misc/NavBar/useSwitchRange';
import { rangeTags } from '@modules/analyze/constant';

const DatePicker = () => {
  const { range } = useQueryDateRange();
  const { switchRange } = useSwitchRange();

  return (
    <div className="flex h-8 items-center rounded-3xl border md:hidden">
      {rangeTags.map((t) => {
        return (
          <div
            key={t}
            className={classnames(
              { 'bg-gray-200 ': range === t },
              'flex h-full cursor-pointer items-center rounded-3xl px-4 text-sm'
            )}
            onClick={async () => {
              await switchRange(t);
            }}
          >
            {t}
          </div>
        );
      })}
    </div>
  );
};

export default DatePicker;
