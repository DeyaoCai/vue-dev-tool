'use strict';
const fs = require('fs');
const path = require('path');

console.log(__dirname)
//源文件夹
let filePath = path.resolve(__dirname, '../static');
//目标文件夹
let destPath = path.resolve(__dirname, '../dist');

//文件遍历方法
function copyFiles(filePath, destPath) {
  if (!fs.existsSync(destPath)) {
    fs.mkdir(destPath, function (err) {
      if(err) throw err
    })
  }
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) throw err;
    //遍历读取到的文件列表
    files.forEach(function (filename) {
      if (filename.startsWith('.')) return;
      //获取当前文件的绝对路径
      var filedir = path.join(filePath, filename);
      //根据文件路径获取文件信息，返回一个fs.Stats对象
      fs.stat(filedir, function (eror, stats) {
        if (eror) throw eror;

        var isFile = stats.isFile();//是文件
        var isDir = stats.isDirectory();//是文件夹
        if (isFile) {
          var destFiledir = path.join(destPath, filename);
          fs.copyFile(filedir, destFiledir, function (error) {
            if (error) throw error
          })
          // 读取文件内容
          //var content = fs.readFileSync(filedir, 'utf-8');
          //console.log(content);
        }
        if (isDir) {
          copyFiles(filedir, path.join(destPath, filename));//递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
      })
    });
  });
}

module.exports = function () {
  copyFiles(filePath, destPath);
};
