// รวมคลังคำถามจากเกมนักธรรมปราบกิเลส (../dhamma-boss-game/js/questions.js) เข้า index.html ไฟล์เดียว
// ใช้: node tools/build.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const qsrc = fs.readFileSync(path.join(root, '..', 'dhamma-boss-game', 'js', 'questions.js'), 'utf8');
const bank = vm.runInNewContext(qsrc + ';QUESTION_BANK');
const html = fs.readFileSync(path.join(root, 'src', 'game.html'), 'utf8')
  .replace('/*QUESTIONS*/[]', JSON.stringify(bank));
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('index.html:', bank.length, 'ข้อ,', Math.round(html.length / 1024), 'KB');
