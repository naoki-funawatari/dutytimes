export const excludeString = value => {
  let exval = `${value}`;
  while (exval.search(/\D/) !== -1) {
    exval = exval.replace(/\D/, '');
  }
  if (exval !== '') {
    exval = `${parseInt(exval, 10)}`;
  }
  return exval;
}

export const toRoundedUpText = value => {
  if (`${value}` === '')
    return '';

  let exval = (`0000${value}`).slice(-4);
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

  shour = (`00${nhour}`).slice(-2);
  sminute = (`00${nminute}`).slice(-2);
  return `${shour}:${sminute}`;
}

export const toRoundedDownText = value => {
  if (`${value}` === '')
    return '';

  let exval = (`0000${value}`).slice(-4);
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

  shour = (`00${nhour}`).slice(-2);
  sminute = (`00${nminute}`).slice(-2);
  return `${shour}:${sminute}`;
}
