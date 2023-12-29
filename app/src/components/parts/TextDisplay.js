import classNames from 'classnames';
import LoadingIcon from './LoadingIcon';

export default function TextDisplay ({ lastValue }) {
  console.log(lastValue);

  const textClasses = classNames({
    'text-white font-bold text-3xl': true,
    'justify-start': !!lastValue,
    'justify-center': !lastValue,
  });

  return (
    <div>
      <div className='flex'>
        <img className='pr-1' src='/lastrefreshedclock.svg' />
        <p className='text-[#FFA500] text-sm'>Last Refreshed</p>
      </div>
      <div className={`flex ${textClasses}`}>
        <p>{lastValue || <LoadingIcon/>}</p>
      </div>
    </div>
  );
};