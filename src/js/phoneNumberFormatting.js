export default function phoneNumberFormatting(phoneNumber) {
  let test = phoneNumber;
  let result = '+';

  if (/^[^+]/.test(phoneNumber)) {
    result += '7';
    test = phoneNumber.slice(1);
  }

  result += test.match(/[\d]*/g).filter((el) => el !== '').join('');

  return result;
}
