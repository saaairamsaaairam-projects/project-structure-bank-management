const generateAccountNumber = () => {
  const prefix = "BANK";
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000);
  return `${prefix}${randomDigits}`;
};

module.exports = generateAccountNumber;
