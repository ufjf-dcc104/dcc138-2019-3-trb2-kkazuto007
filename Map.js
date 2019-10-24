function Map(modelo) {
    exemplo = {
        cells: [],
        LINES: 32,
        COLUMNS: 32,
        SIZE: 32,
        assets: null,
    }
    Object.assign(this, exemplo, modelo);
    for (var c = 0; c < this.COLUMNS; c++) {
        this.cells[c] = [];
        for (var l = 0; l < this.LINES; l++) {
            exemplo.cells[c][l] = { tipo: 0 };
        }
    }
    if (modelo.m) {
        for (var c = 0; c < this.COLUMNS; c++) {
            for (var l = 0; l < this.LINES; l++) {
                this.cells[c][l] = { tipo: modelo.m[l][c] };
            }
        }
    }
}


Map.prototype.desenhar = function (ctx) {
    var cor = "black";
    for (var c = 0; c < this.COLUMNS; c++) {
        for (var l = 0; l < this.LINES; l++) {
            switch (this.cells[c][l].tipo) {
                case 0:
                    cor = "tan";
                    ctx.drawImage(this.assets.img("cavetiles"),288,98,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 1:
                    ctx.drawImage(this.assets.img("block"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 2:
                    ctx.drawImage(this.assets.img("temple"),0,0,128,128,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 3:
                    ctx.drawImage(this.assets.img("cavetiles"),288,98,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.drawImage(this.assets.img("cavetiles"),256,98,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 4:
                    ctx.drawImage(this.assets.img("cavetiles"),288,98,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.drawImage(this.assets.img("cavetiles"),320,98,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 5:
                    ctx.drawImage(this.assets.img("cavetiles"),288,98,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.drawImage(this.assets.img("cavetiles"),288,64,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 6:
                    ctx.drawImage(this.assets.img("cavetiles"),288,98,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.drawImage(this.assets.img("cavetiles"),288,120,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 7:
                    ctx.drawImage(this.assets.img("redstone"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                default:
                    cor = "black";
            }
        }
    }
}