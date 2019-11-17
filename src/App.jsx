import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './App.css';

const excludeString = value => {
  let exval = String(value);
  while (exval.search(/\D/) !== -1)
    exval = exval.replace(/\D/, '');
  if (exval !== '')
    exval = '' + parseInt(exval, 10);
  return exval;
}
const roundDown = value => {
  if (String(value) === '')
    return '';

  let exval = ('0000' + String(value)).slice(-4);
  let shour = exval.slice(0, 2);
  let sminute = exval.slice(2, 4);
  let nhour = parseInt(shour, 10);
  let nminute = parseInt(sminute, 10);

  if (nminute < 15) {
    nminute = 0;
  } else if (nminute < 30) {
    nminute = 15;
  } else if (nminute < 45) {
    nminute = 30;
  } else {
    nminute = 45;
  }

  shour = ('00' + nhour).slice(-2);
  sminute = ('00' + nminute).slice(-2);
  return `${shour}:${sminute}`;
}
const roundUp = value => {
  if (String(value) === '')
    return '';

  let exval = ('0000' + String(value)).slice(-4);
  let shour = exval.slice(0, 2);
  let sminute = exval.slice(2, 4);
  let nhour = parseInt(shour, 10);
  let nminute = parseInt(sminute, 10);

  if (nminute > 45) {
    nhour++;
    nminute = 0;
  } else if (nminute > 30) {
    nminute = 45;
  } else if (nminute > 15) {
    nminute = 30;
  } else if (nminute > 0) {
    nminute = 15;
  } else {
    nminute = 0;
  }

  shour = ('00' + nhour).slice(-2);
  sminute = ('00' + nminute).slice(-2);
  return `${shour}:${sminute}`;
}
const DateRow = props => {
  return (
    <tr>
      <td className="datelabel">
        <span>{props.day}日（</span>
        <span className={`wd${props.wdNumber}`}>{props.wdString}</span>
        <span>）</span>
      </td>
      <td>
        <input type="text" size="2" maxLength="4"
          id={`input_start_${props.id}`}
          onChange={e => {
            const value = excludeString(e.target.value);
            e.target.value = value;
            const output_id = `output_start_${props.id}`;
            const output = document.getElementById(output_id);
            output.innerText = roundUp(value);
          }}
        />
      </td>
      <td>
        <input type="text" size="2" maxLength="4"
          id={`input_end_${props.id}`}
          onChange={e => {
            const value = excludeString(e.target.value);
            e.target.value = value;
            const output_id = `output_end_${props.id}`;
            const output = document.getElementById(output_id);
            output.innerText = roundDown(value);
          }}
        />
      </td>
      <td className="round" id={`output_start_${props.id}`}></td>
      <td className="round" id={`output_end_${props.id}`}></td>
    </tr>
  );
}
const DateList = props => {
  const endOfMonth = new Date(props.year, props.month + 1, 0);
  const numberOfDays = endOfMonth.getDate();
  const weekday = ['日', '月', '火', '水', '木', '金', '土'];
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">{props.year} 年 {props.month + 1} 月</td>
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
            const wdNumber = (new Date(props.year, props.month, i + 1)).getDay();
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
const renderList = async () => {
  return await fetch('https://ntp-a1.nict.go.jp/cgi-bin/json')
    .then(res => res.json())
    .then(res => {
      const today = new Date(res.st * 1000);
      const display = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      );
      render(
        <DateList
          year={display.getFullYear()}
          month={display.getMonth()}
          day={display.getDate()}
        />,
        document.getElementById('root')
      );
    }).then(() => {
      console.log('success');
    }).catch(() => {
      console.log('failure');
    });
}
const App = () => {
  useEffect(() => {
    (async () => await renderList())()
  });

  return (
    <></>
  );
}

export default App;