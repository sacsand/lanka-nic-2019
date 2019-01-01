const mynic = require('./index.js');

// console.log(mynic.infoNic('931260723v'));
// console.log(mynic.validateNic('931260723v'));
// console.log(mynic.swapNic('931260723v'));

// console.log(mynic.infoNic('200184300068'));
// console.log(mynic.validateNic('200184500068'));
// console.log(mynic.swapNic('200184500068'));

// TEST 1
// check validation is working for old nic format
// expected output
const result1 = {
  isValidated: true,
  input: '931260723v',
  format: 'old',
  newFormat: '199312600723',
  oldFormat: '931260723v',
  nicLength: 10,
  gender: 'Male',
  character: 'v',
  birthday: '05/05/1993'
};

const resOne = mynic.infoNic('931260723v');

if (JSON.stringify(resOne) !== JSON.stringify(result1)) {
  throw new Error('nic info mathing not working for old format : failed');
} else {
  console.log('nic info worrking for old format : ok');
}

// TEST 2
// check validation is working for new nic format
// expected output
const result2 = {
  isValidated: true,
  input: '200184300068',
  format: 'new',
  newFormat: '200184300068',
  oldFormat: '--',
  nicLength: 12,
  gender: 'Female',
  character: '--',
  birthday: '12/08/2001'
};

const resTwo = mynic.infoNic('200184300068');

if (JSON.stringify(resTwo) !== JSON.stringify(result2)) {
  throw new Error('nic info mathing not working for new format : failed');
} else {
  console.log('nic info worrking for new format : ok');
}
