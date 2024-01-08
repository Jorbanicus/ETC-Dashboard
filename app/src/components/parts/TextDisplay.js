import classNames from 'classnames';

export default function TextDisplay ({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  console.log('TextDisplay lastValue:', data);

  const textClasses = classNames(
    'text-white',
    'font-bold',
    'text-xl',
    {
      'justify-start': data,
      'justify-center': !data,
    }
  );

  return (
    <div>
      <div className='flex'>
        <img className='pr-1' src='/lastrefreshedclock.svg' />
        <p className='text-[#FFA500] text-sm'>Last Refreshed:</p>
      </div>
      <div className={`flex ${textClasses}`}>
        <p>{data}</p>
      </div>
    </div>
  );
};