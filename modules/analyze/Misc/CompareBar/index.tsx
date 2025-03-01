import React from 'react';
import useCompareItems from '@modules/analyze/hooks/useCompareItems';
import { getLastPathSegment } from '@common/utils/url';
import classnames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { removeSearchValue } from '@modules/analyze/Misc/urlTool';
import { Level } from '@modules/analyze/constant';
import AddInput from './AddInput';
import ColorSwitcher from './ColorSwitcher';

const CloseIcons: React.FC<{ label: string; level: Level }> = ({
  label,
  level,
}) => {
  const router = useRouter();
  return (
    <div
      className="absolute top-2 right-2 hidden cursor-pointer p-2 text-white group-hover:block"
      onClick={() => {
        const p = removeSearchValue(label);
        router.push(p);
      }}
    >
      <AiOutlineClose className="text-base" />
    </div>
  );
};

const CompareItem: React.FC<{
  item: { label: string; name: string; level: Level };
  showCloseIcon: boolean;
  showColorSwitch: boolean;
  className?: string;
}> = (props) => {
  const { item, showColorSwitch, showCloseIcon, className } = props;
  return (
    <div
      className={classnames(
        className,
        'group relative min-w-[150px] flex-1 border-l-2 border-r-white bg-[#3A5BEF] p-3 '
      )}
    >
      {showCloseIcon && <CloseIcons {...item} />}
      <div className="mb-2 text-2xl font-bold text-white line-clamp-1">
        {getLastPathSegment(item.label)}
      </div>
      {showColorSwitch && <ColorSwitcher label={item.label} />}
    </div>
  );
};

const CompareBar = () => {
  const { compareItems } = useCompareItems();
  const len = compareItems.length;

  return (
    <div className="relative z-20 mb-8 flex min-h-[80px] md:hidden">
      <div className="min-w-0 flex-1 rounded-tl-lg rounded-bl-lg bg-[#00B5EA]">
        <div className="overflow flex h-full">
          {compareItems.map((item, index) => {
            return (
              <CompareItem
                key={item.label}
                item={item}
                showCloseIcon={len > 1}
                showColorSwitch={len > 1}
                className={classnames({
                  'rounded-tl-lg rounded-bl-lg !border-l-0': index === 0,
                  // 'text-center': len == 1,
                })}
              ></CompareItem>
            );
          })}
        </div>
      </div>
      <AddInput />
    </div>
  );
};

export default CompareBar;
