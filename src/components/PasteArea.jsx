import React from 'react';

const PasteArea = () => {
  return (
    <>
      <button type="button" onClick={e => {
        const ta = document.getElementById('pasteArea');
        ta.value = [...document.querySelectorAll('.round')].map((v, i) => {
          return v.innerText + (i % 2 === 0 ? '\t' : '\n')
        }).join('');
        ta.select();
        document.execCommand('copy');
        ta.blur();
      }}>copy</button>
      <textarea className="pasteArea" id="pasteArea" cols="15" rows="32">
      </textarea>
    </>
  );
}

export default PasteArea;
