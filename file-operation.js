const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const filename = process.env.FILENAME;

// Запись в файл
fs.writeFileSync(filename, 'Привет, мир!', (err) => {
  if (err) throw err;
  console.log('Файл был успешно создан и записан.');
});

// Чтение из файла
const content = fs.readFileSync(filename, 'utf8');
console.log('Содержимое файла:', content);
