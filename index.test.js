const mynic = require('./index.js');

// console.log(mynic.infoNic('931260723v'));
// // console.log(mynic.validateNic('931260723v'));
// // console.log(mynic.swapNic('931260723v'));

// console.log(999999999, mynic.infoNic('200184300068'));
// // console.log(mynic.validateNic('200184500068'));
// // console.log(mynic.swapNic('200184500068'));

// console.log(mynic.infoNic('960002535v'));

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
  throw new Error('TEST 1 :nic info mathing not working for old format (NOT Leaf year) : failed');
} else {
  console.log('TEST 1 : nic info working for old format (NOT LEAF year): ok');
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
  throw new Error('TEST 2 : nic info mathing not working for new format (NOT Leaf year) : failed');
} else {
  console.log('TEST 2 : nic info working for new format (NOT LEAF year) : ok');
}

// TEST 3
// check validation is working for new nic format - leaf year 1996
// expected output
const result3 = {
  isValidated: true,
  input: '962642535v',
  format: 'old',
  newFormat: '199626402535',
  oldFormat: '962642535v',
  nicLength: 10,
  gender: 'Male',
  character: 'v',
  birthday: '09/20/1996'
};

const resThree = mynic.infoNic('962642535v');

if (JSON.stringify(resThree) !== JSON.stringify(result3)) {
  throw new Error('TEST 3 : nic info mathing not working for old format (LEAF year) : failed');
} else {
  console.log('TEST 3 : nic info working for old format LEAF year : ok');
}

// TEST 4
// check validation is working for wrong nic format
// expected output
const result4 = {
  isValidated: false
};
// test for dayNo = 000
const resFour = mynic.infoNic('960002535v');
// test for dayNo = 367
const resFour2 = mynic.infoNic('963672535v');
// test for dayNo = 867
const resFour3 = mynic.infoNic('968672535v');

if (
  JSON.stringify(resFour) !== JSON.stringify(result4) ||
  JSON.stringify(resFour2) !== JSON.stringify(result4) ||
  JSON.stringify(resFour3) !== JSON.stringify(result4)
) {
  throw new Error('TEST 4 : validation failed for  wrong nic format : failed');
} else {
  console.log('TEST 4 : validation pass for wrong nic format : ok');
}
