const path = require('node:path')

// saber separador de archivos segun SO
console.log(path.sep);

// windows \

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename('D:\maintance')
console.log(base);

const extension = path.extname('image.jpg')
console.log(extension);

