## Accelon3的筆記與設定存檔  
這些筆記與設定…也許對別人不重要，但也是我的心得報告，還是留存，以便日後教學時用得上

> 授權方式：https://creativecommons.org/licenses/by-nc-sa/3.0/tw/  
***  
#### Git常用指令  
* 刪除上一次推送。出問題時，使用此命令  
git remote rm origin  
  
* 一次進行：加入與提交  
git commit -a -m "first commit"  
或者  
git commit -am "first commit"  
  
* 將這次提交，合併到上一次提交  
git commit --amend --no-edit  
合并上一次提交（用于反复修改）  
git commit --amend -m 'xxx'  
  
***  
#### Git基本起始指令  
1. echo "# mycoding" >> README.md  
git init  
git add README.md  
git commit -m "first commit"  
git remote add origin https://github.com/adbdao/mycoding.git  
git push -u origin master  
  
2. 直接拉取  
git clone https://github.com/adbdao/mycoding.git  
git remote add origin https://github.com/adbdao/mycoding.git  
git push -u origin master  
***  