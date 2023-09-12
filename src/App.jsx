import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import Buttons from './Buttons';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const newData = await resp.json();
        setData(newData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      <Buttons
        jobs={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={data} currentItem={currentItem} />
    </section>
  );
};
export default App;
