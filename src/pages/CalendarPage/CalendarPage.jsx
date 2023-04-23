import { addMonths, getDate, getMonth, getYear } from 'date-fns';
import css from './CalendarPage.module.css';
import { MONTNKEY } from './MONTNKEY';
import { useEffect, useState } from 'react';

const CalendarPage = () => {
  const[ time, setTime] = useState(Date.now());
 const [day, setDay]= useState('')
 const [monht,setMonht]= useState('')
 const [year,setYear]=useState('')
console.log(day)
 useEffect(()=>{
  setDay(getDate(time))
  setMonht(getMonth(time))
  setYear(getYear(time))
 },[time])

 if(getMonth(Date.now())>=monht&&getYear(Date.now())>=year){
  console.log("stop")
 }
const handleChangMonthBack= ( )=>{
  console.log("back")
  setTime(addMonths(time,-1))
 
}
const handleChangMonthForward=()=>{
  console.log("forward")
  
  setTime(addMonths(time,1))
  
}


  return (
    <>
      <h1>SSSss </h1>
      <div className={css.calendar}>
        <div className={css.selector}>
          <span className={css.monht}>
            {MONTNKEY[monht]} {year}
          </span>
          <div className={css.monhtchang}>
            <button onClick={handleChangMonthBack} type="button" className={css.btn_left}>
              <img src="./left.svg" alt="" />
            </button>
            <button onClick={handleChangMonthForward} type="button" className={css.btn_ringt}>
              <img src="./ringt.svg" alt="" />
            </button>
          </div>
        </div>
        <ul className={css.viue}>
          <li>
            <button className={css.btn_changL} type="button">Monht</button>
          </li>
          <li>
            <button className={css.btn_changR} type="button">Day</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CalendarPage;
