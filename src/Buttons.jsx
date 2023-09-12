function Buttons({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            type='button'
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => {
              setCurrentItem(index);
            }}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
export default Buttons;
