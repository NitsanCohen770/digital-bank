import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: 'פלוני אלמוני',

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
