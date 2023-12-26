const generateRandomText = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const year = currentDate.getFullYear().toString().slice(-2);

  const formattedText = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;

  return formattedText;
};

module.exports = generateRandomText;
