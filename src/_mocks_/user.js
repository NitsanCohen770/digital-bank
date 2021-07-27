import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name
    .findName()
    .split(' ')
    .map((firstOrLastName, index) => {
      if (index === 0) {
        return 'נוסבאום';
      }
      if (firstOrLastName.charAt(0) === 'C') {
        return 'דוד ';
      }
      if (firstOrLastName.charAt(0) === 'E') {
        return 'אוחיון ';
      }
      if (firstOrLastName.charAt(0) === 'A') {
        return 'יוסי';
      }
      return 'אביחי';
    })
    .join(' '),

  company: faker.datatype.number(),
  isVerified: faker.datatype.boolean(),
  status: sample(['הכנסה', 'הוצאה']),
  role: sample([
    'בנק לאומי',
    'בנק הפועלים',
    'בנק מזרחי',
    'בנק דיסקונט',
    'בנק מרכנתיל דיסקונט',
    'בנק הבינלאומי',
    'בנק מסד',
    'הבנק הדיגטילי הראשון',
    'בנק איגוד',
    'בנק יהב'
  ])
}));

export default users;
