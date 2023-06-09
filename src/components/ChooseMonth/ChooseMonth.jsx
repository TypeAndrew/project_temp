import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as dateFns from 'date-fns';

// const formatofYear = 'yyy';
// const formatOfMonth = 'MMM';
const formatofWeek = 'EEEE';
const formatOfDay = 'd';

const ChooseMonth = () => {
  const [currentDate, setCurrentDate] = useState(Date.now());

  const { time } = useParams();

  useEffect(() => {
    if (!time.includes(':')) {
      const result = time.split('.');
      const date = { years: result[0] - 1970, months: result[1] };

      setCurrentDate(prev => {
        return dateFns.milliseconds(date);
      });
    }
  },[currentDate, time]);
  //Find the first day of current Date
  const firstDay = dateFns.startOfMonth(currentDate);
  //Find the last day of current Date
  const lastDay = dateFns.lastDayOfMonth(currentDate);
  ////Ein Find the first day of week of firstDay
  const startDate = dateFns.startOfWeek(firstDay);
  //Find the last day of week of lastDay
  const endDate = dateFns.lastDayOfWeek(lastDay);
  //render all days

  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
  const weeks = (date => {
    const weeks = [];
    for (let day = 1; day <= 7; day++) {
      weeks.push(totalDate[day]);
    }
    return weeks;
  })(currentDate);

  return (
    <div>
      {/* <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem 0' }}>
         <button onClick={() => setCurrentDate(dateFns.subMonths(currentDate, 1))}>last</button>
             <span>
             {dateFns.format(currentDate, formatOfMonth)} {dateFns.format(currentDate, formatofYear)}
             </span>
         <button onClick={()=> setCurrentDate(dateFns.addMonths (currentDate, 1)) }>next</button>
     </div> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '1rem',
        }}
      >
        {weeks.map(week => (
          <span key={week}>{dateFns.format(week, formatofWeek)}</span>
        ))}
        {totalDate.map(date => (
          <span key={date}> {dateFns.format(date, formatOfDay)}</span>
        ))}
      </div>
    </div>
  );
};

export default ChooseMonth;
