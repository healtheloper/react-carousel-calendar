export const getDateFormat = (date, myLang) => {
  const lang = myLang || navigator.language;
  switch (lang) {
    case 'ko-KR':
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
    default: {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return `${date.getFullYear()} ${months[date.getMonth()]}`;
    }
  }
};

export const getDaysFormat = (myLang) => {
  const lang = myLang || navigator.language;
  switch (lang) {
    case 'ko-KR':
      return ['일', '월', '화', '수', '목', '금', '토'];
    default:
      return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  }
};
