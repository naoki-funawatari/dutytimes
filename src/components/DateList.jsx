import React from 'react';
import DateRow from './DateRow';

const DateList = ({ year, month }) => {
  const endOfMonth = new Date(year, month + 1, 0);
  const numberOfDays = endOfMonth.getDate();
  const weekday = ['日', '月', '火', '水', '木', '金', '土'];
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">{year} 年 {month + 1} 月</td>
            <td>
              <button type="button" onClick={e => {
                const ta = document.getElementById('textarea');
                ta.value = [...document.querySelectorAll('.round')].map((v, i) => {
                  return v.innerText + (i % 2 === 0 ? '\t' : '\n')
                }).join('');
                ta.style.visibility = 'visible';
                ta.select();
                document.execCommand('copy');
                ta.style.visibility = 'hidden';
              }}>copy</button>
            </td>
            <td></td>
          </tr>
          {[...new Array(numberOfDays).keys()].map((i, v) => {
            const wdNumber = (new Date(year, month, i + 1)).getDay();
            const wdString = weekday[wdNumber];
            return (
              <DateRow
                key={i}
                id={i}
                day={i + 1}
                wdNumber={wdNumber}
                wdString={wdString}
              />
            );
          })}
        </tbody>
      </table>
      <textarea id="textarea" defaultValue="" cols="1" rows="1"
        style={{ width: 0, heigth: 0, visibility: 'hidden' }}>
      </textarea>
    </>
  );
}

export default DateList;
