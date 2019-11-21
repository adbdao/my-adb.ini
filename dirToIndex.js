// 導入模組
var fs = require('fs')
var path = require('path')
// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')
// 規範化檔案路徑
var h = path.normalize('./')
// 取得當前目錄下所有檔案及資料夾
var d = fs.readdirSync(h)
// 刪除.git這個目錄
if (d[0] == '.git') {
    d.shift()
}
// 倒轉陣列，以便中文筆劃多的檔在前
d.reverse()

// 讀取index.html
var index = fs.readFileSync('index.html', 'utf8')
// 不必關閉檔案
// fs.closeSync(path.normalize('./index.html'))
// 在陣列中找出「檔名陣列」
var k = index.split('\n')
for (var i = 0; i < k.length; i++) {
    if (/var ArrLi\s?\=/.test(k[i])) {
        k[i] = 'var ArrLi = ["' + d.join('","') + '"]'
    }
}
// 好像無法在for of中使用正規，以下失敗
// for(var i of k) {
//     if (/var ArrLi\s?\=/.test(k[i])) {
//     if (i.search('var ArrLi=')) {
//         i = 'var ArrLi = ["' + d.join('","') + '"]'
//     }
// }

// 用相對路徑寫入檔案
fs.writeFileSync('index.html', k.join('\n'), 'utf8')
// 完成時返回通知
console.log('index.html is OK')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')
// 本來只寫入另一檔案DirName.txt，還要人工複製，後來可以直接寫入index.html
// 用相對路徑寫入檔案
// fs.writeFileSync(path.normalize('./DirName.txt'), '["' + d.join('","') + '"]', 'utf8')
// // 完成時返回通知
// console.log('DirName is OK')