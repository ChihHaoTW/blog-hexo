var fs = require("fs")

dir = {
  static: __dirname + "/../static/",
  public: __dirname + "/../public/",
}

list = fs.readdirSync(dir.static)

for( let i in list ) {
  fs.createReadStream(dir.static + list[i]).pipe(fs.createWriteStream(dir.public + list[i]))
}

