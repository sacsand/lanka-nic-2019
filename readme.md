# lanka-nic-2019
[![https://nodei.co/npm/lanka-nic-2019.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/lanka-nic-2019.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/lanka-nic-2019)

New sri lanka nic validator 2019 support both old and new nic id format .this pacakge can be used to swap nic ,validate and get more info like ,bday,gender etc.. 

# Function Supports

  - validate nic
  - swap nic number.old to new or new to old.
  - get nic infromation (bday,gender,old and new format...)
  
# Installation


```sh
$ npm install lanka-nic-2019 --save
```
or
```sh
$ yarn add lanka-nic-2019 
```
# How to use

require
```sh
const lankaNic = require('lanaka-nic-2019');


lanakNic.infoNic('123456789v');
lanakNic.validateNic('123456789v');
lanakNic.swapNic('123456789v');
```
or import
```sh
import lankaNic from 'lanka-nic-2019';


lanakNic.infoNic('12345678912');
lanakNic.validateNic('12345678912');
lanakNic.swapNic('12345678912');
```
### supported methods

| Method | Input | outPut |
| ------ | --------------------------------| ------------------------------------------------ |
| validateNic       |     String: String : old or new nic number | Bool: `true` or `false `       |
| swapNic       |     String: String : old or new nic number | String : `xxxxxxxxxv` ,swap nic old to new and vice versa , if enetered nic no is incorrect will display 'incorrect format' error message        |
| infoNic | String : old or new nic number |  Object :                                         | 
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

Any modification , correction welcome 

##### prerequisites
 - nodejs(6+)
 - EsLint support editor
 

##### setting up
 
 clone the repo and npm install . make sure to use eslint.
 
##### testing
beforre push chek for the erros
```sh
$ npm run test
```
 ##### versioning
 
  used  [SemVer](https://semver.org/)SemVer for versioning. 
  
 ##### style guide
 follow the AirBnb Style Guide.
 
  License
----

MIT
