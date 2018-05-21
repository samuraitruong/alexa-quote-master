var fs = require('fs')
var path="topics"
  fs.readdir(path, function (err, files) {
    files.forEach(function (file) {
    	console.log(file +"===" + file.toLowerCase())

    	fs.renameSync(path+"/"+ file, path+"/"+ file.toLowerCase())
    })
});