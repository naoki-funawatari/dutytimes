import React from 'react';
import {
  excludeString,
  toRoundedUpText,
  toRoundedDownText,
} from '../helpers/stringHelper';
import InputText from './InputText';

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
            output.innerText = toRoundedUpText(value);
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
            output.innerText = toRoundedDownText(value);
          }}
        />
      </td>
      <td className="round" id={`output_start_${props.id}`}></td>
      <td className="round" id={`output_end_${props.id}`}></td>
      <td style={{ fontSize: 0 }}><InputText id={`toggle_${props.id}`} /></td>
    </tr>
  );
}

export default DateRow;
