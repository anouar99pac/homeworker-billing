export function deepCopyObject(obj) {
  const clone = {};
  for (const i in obj) {
    if (obj[i] != null && typeof(obj[i]) === 'object') {
        clone[i] = deepCopyObject(obj[i]);
    } else {
        clone[i] = obj[i];
    }
  }
  return clone;
}

export function deepCopyArray(obj) {
  const clone = [];
  for (const i in obj) {
    if (obj[i] != null && typeof(obj[i]) === 'object') {
        clone[i] = deepCopyObject(obj[i]);
    } else {
        clone[i] = obj[i];
    }
  }
  return clone;
}

export function roundNumber(number: any) {
  const factor = 100;
  return Math.round(number * factor) / factor;
}

export function getEurosValueAndUnit(euros: any) {
  let value: any, unit: string;
  if (euros < 1000 ) {
    value = Math.round(euros).toLocaleString();
    unit = '€';
  } else if ( euros >= 1000 && euros < 1000000 ) {
    value = (Math.round(euros / 10) / 100).toLocaleString();
    unit = 'k€';
  } else if ( euros > 1000000 ) {
    value = Math.round(euros / 1000).toLocaleString();
    unit = 'k€';
  }
  return {
    initialValue: euros,
    value,
    unit,
  };
}

export function getkWattsValueAndUnit(kWatts: any) {
  let value: any, unit: string;
  if (kWatts < 1000 ) {
    value = (Math.round(kWatts)).toLocaleString();
    unit = 'kWh';
  } else {
    value = (Math.round(kWatts / 1000)).toLocaleString();
    unit = 'MWh';
  }
  return {
    initialValue: kWatts,
    value,
    unit,
  };
}
