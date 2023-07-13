// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫檔名及編碼
var x = '.adb'
var xok = 'accelon3.ini'
var ru = 'utf16le'
var wu = 'utf16le'
// 完成後的副檔名
// var afterName = '.xml'
var lst = []

// 建立函數，以便回呼使用
function XmlAddMypb(go) {
    // 規範化檔案路徑
    var h = path.normalize(go)
    // 取得本檔檔名，以本檔檔名作參數，在當前目錄下：若有相同名的副檔名的檔案，就進行轉換
    // 取得當前目錄下所有檔案及資料夾
    var d = fs.readdirSync(h)
    // 循環目錄
    for (var k of d) {
        // 取得絕對路徑，並規範化路徑
        var n = path.normalize(h + '/' + k)
        // 取得檔案資訊
        var c = fs.statSync(n)
        // 判斷是否為資料夾，判斷是否為所要轉換的副檔名的檔案
        if (!c.isDirectory() && path.extname(n) == x) {
            // windows要用\r\n，unix才用\n
            // 要刪除副檔名
            lst.push('\r\n[' + n.replace(x, '') + ']' + body)
        }
    }
}

var head = '[frmMain]\r\nleft=273\r\ntop=0\r\nwidth=990\r\nheight=770\r\nmaximimize=0\r\nminimized=1\r\nshowhidden=0\r\nsorttype=-4\r\n\r\n[option]\r\nlanguage=lang_cht.ini\r\n\r\n[frmDesktop]\r\nadvancemode=0\r\nsynonym=0\r\nautofocus=0\r\nexternalimageviewer=0\r\n\r\n[setting]\r\ntextbgcolor=$bbbb88\r\ntextbgcolor2=$cccc99\r\nuseCcg=0\r\nuseMingLiExt=0\r\nautodict=0\r\nautosearch=0\r\n'

var body = '\r\nmaximimize=1\r\nminimized=0\r\ndbfile=.\r\nlastaccess=2023/06/19 15:33:06\r\nusing=1\r\ntreewidth=235'


// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 啟用函數
XmlAddMypb('./')
// 用絕對路徑寫入檔案
// 檔頭需要一個「﻿」字元，Accelon3的indexer.exe才可以讀取，不知何因？
// 排序篇名.sort()
fs.writeFileSync(xok, '﻿' + head + lst.sort().join('\r\n'), wu)

// 完成時返回通知
console.log('node OK for : ' + xok)

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')