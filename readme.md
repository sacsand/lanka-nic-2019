# lanka-nic-2019
[![https://nodei.co/npm/lanka-nic-2019.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/lanka-nic-2019.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/lanka-nic-2019)

Sri Lankan NIC validator which supports both old and new NIC formats. This pacakge can be used to swap NIC, validate and get more info like, bday, gender etc.. 

# Features
  - Validate NIC.
  - Swap NIC. (Old to new or new to old)
  - Extract NIC infromation. (Bday, Gender, etc..)
  
# Installation
```sh
$ npm install lanka-nic-2019 --save
```
or
```sh
$ yarn add lanka-nic-2019 
```

# How to use
- First, require
```javascript
const lankaNic = require('lanaka-nic-2019');
```
or import
```javascript
import lankaNic from 'lanka-nic-2019';
```

- Next, call the functions like:
```javascript
lanakNic.infoNic('12345678912');
lanakNic.validateNic('12345678912');
lanakNic.swapNic('12345678912');
```

### Supported methods

| Method | Input | Output |
| ------ | --------------------------------| ------------------------------------------------ |
| validateNic       |     String : Old or new NIC number | Bool: `true` or `false `       |
| swapNic      |     String : Old or new NIC number | String : `xxxxxxxxxv` , Swap NIC old to new and vice versa. If entered Nic no. is incorrect will display 'incorrect format' error message.        |
| infoNic | String : Old or new NIC number |  Object :                                         | 
|         |                                |  `{`                                                |    
|         |                                |  `   isValidated: true,   `                        |  
|         |                                |  `   input: '123456789v',   `                      | 
|         |                                |  `   format: 'old',   `                            |
|         |                                |   `  newFormat: '123456789000',  `                 |
|         |                                |   `  oldFormat: '123456789v',  `                   |
|         |                                |   `  nicLength: 10,  `                             |
|         |                                |  `   gender: 'Male', `                             |
|         |                                |   `  character: 'v',   `                           |
|         |                                |   `  birthday: '05/05/1903'  `                     |
|         |                                |  `   }    `                                        |
                                                

### Developing

Any modification, correction welcome 

##### Prerequisites
 - NodeJS(6+)
 - EsLint supported editor.
 

##### Setting up
 
Clone the repo and run `yarn install` or `npm install`. Make sure you have an editor with an eslint plugin active. **Never** start working without eslint.
 
##### Testing
Before pushing the code, please check for errors:

```sh
npm run test
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Style guide

Always follow the AirBnb Style Guide.

## License

[MIT licensed](./LICENSE).