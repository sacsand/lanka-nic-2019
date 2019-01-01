/* his pacakge code based on info found on
  https://en.wikipedia.org/wiki/National_identity_card_(Sri_Lanka)

*/

const monthArr = [
  {
    month: 'January',
    days: 31
  },
  {
    month: 'February',
    days: 29
  },
  {
    month: 'March',
    days: 31
  },
  {
    month: 'April',
    days: 30
  },
  {
    month: 'May',
    days: 31
  },
  {
    month: 'June',
    days: 30
  },
  {
    month: 'July',
    days: 31
  },
  {
    month: 'August',
    days: 31
  },
  {
    month: 'Septhember',
    days: 30
  },
  {
    month: 'October',
    days: 31
  },
  {
    month: 'November',
    days: 30
  },
  {
    month: 'December',
    days: 31
  }
];

// funtion to add char(s) to given index . if want remove some index.and return new string
const splice = function(text, idx, rem, str) {
  return text.slice(0, idx) + str + text.slice(idx + Math.abs(rem));
};

const getDayGender = days => {
  let dayNo = days;
  let month = '';
  const result = {
    day: '',
    month: '',
    gender: ''
  };

  if (dayNo < 500) {
    result.gender = 'Male';
  } else {
    result.gender = 'Female';
    dayNo -= 500;
  }

  for (let i = 0; i < monthArr.length; i++) {
    if (monthArr[i].days < dayNo) {
      dayNo -= monthArr[i].days;
    } else {
      month = monthArr[i].month;
      break;
    }
  }
  result.day = dayNo;
  result.month = month;
  return result;
};

// get all data nic number
const getData = nicNumber => {
  const result = {
    input: '',
    year: '',
    dayNo: '',
    character: '',
    format: '',
    oldFormat: '',
    newFormat: '',
    nicLength: ''
  };

  if (nicNumber.length === 10) {
    result.input = nicNumber;
    result.format = 'old';
    result.year = nicNumber.substr(0, 2);
    result.dayNo = nicNumber.substr(2, 3);
    result.character = nicNumber.substr(9, 10);

    /* convert old nic to new nic
     1) get first 9 char
     2)add 0 after 5th char
     3)add 19 to front 
    */
    result.newFormat = splice(splice(nicNumber.substr(0, 9), 5, 0, '0'), 0, 0, '19');
    result.oldFormat = nicNumber;
    result.nicLength = 10;
  } else if (nicNumber.length === 12) {
    result.input = nicNumber;
    result.year = nicNumber.substr(0, 4);
    result.dayNo = nicNumber.substr(4, 3);
    result.character = '--';
    result.format = 'new';
    result.newFormat = nicNumber;
    result.newFormat = nicNumber;

    /* conver new nic to new old
     0) check for support to convert. only nic start with 19 can be converted to old nic format
     1) get first 9 char
     2) add 0 after 5th char
     3) add 19 to front 
    */
    result.oldFormat =
      nicNumber.substr(0, 2) === '19'
        ? splice(splice(nicNumber.substr(2, 10), 5, 1, ''), 9, 0, 'V')
        : '--';

    result.nicLength = 12;
  }
  return result;
};

const validation = nicNumber => {
  let isValidated = false;
  const nicLength = nicNumber.length;
  // get english Letter
  const lastChar = nicNumber.substr(9, 1).toLowerCase();

  /* old format -check the nic no count equal to 10 and first 9 char is a valid
   number  and last char is not   a number and last charater should equal to x or y  */
  if (
    nicLength === 10 &&
    !isNaN(nicNumber.substr(0, 9)) &&
    isNaN(lastChar) &&
    ['x', 'v'].includes(lastChar)
  ) {
    isValidated = true;
    // new format - check
  } else if (nicLength === 12 && !isNaN(nicNumber)) {
    isValidated = true;
  } else {
    isValidated = false;
  }

  return isValidated;
};

const formatDate = date => {
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : `0${month}`;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : `0${day}`;

  return `${month}/${day}/${year}`;
};

const getAll = nicNumber => {
  if (validation(nicNumber)) {
    const { dayNo, year, format, newFormat, oldFormat, nicLength, input, character } = getData(
      nicNumber
    );

    const { month, gender, day } = getDayGender(dayNo);

    const bday = `${day}-${month}-${year}`;
    let birthday = new Date(bday.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'));
    birthday = formatDate(birthday);

    return {
      isValidated: true,
      input,
      format,
      newFormat,
      oldFormat,
      nicLength,
      gender,
      character,
      birthday
    };
  }
  return {
    isValidated: false
  };
};

const swapNIC = nicNumber => {
  const { newFormat, oldFormat, nicLength, isValidated } = getAll(nicNumber);

  let result = 'incorrect format';

  if (isValidated === true) {
    result = nicLength === 10 ? newFormat : oldFormat;
  }

  return result;
};

module.exports = {
  infoNic: getAll,
  swapNic: swapNIC,
  validateNic: validation
};
