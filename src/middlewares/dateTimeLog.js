import moment from 'moment';

export default () => {
  console.log(moment().format('YYYY-MM-DD HH:mm:SSZ'));
  return true;
};
