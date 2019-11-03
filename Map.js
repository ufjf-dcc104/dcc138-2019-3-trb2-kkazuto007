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
                //common floor:
                case 0:
                    cor = "tan";
                    ctx.drawImage(this.assets.img("basetiles"),0,64,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 1:
                    ctx.drawImage(this.assets.img("basetiles"),0,32,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 2:
                    ctx.drawImage(this.assets.img("basetiles"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;

                ///borders:
                case 3:
                    ctx.drawImage(this.assets.img("basetiles"),64,0,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 4:
                    ctx.drawImage(this.assets.img("basetiles"),80,0,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 5:
                    ctx.drawImage(this.assets.img("basetiles"),96,0,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 6:
                    ctx.drawImage(this.assets.img("basetiles"),64,16,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 7:
                    ctx.drawImage(this.assets.img("basetiles"),96,16,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 8:
                    ctx.drawImage(this.assets.img("basetiles"),64,48,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 9:
                    ctx.drawImage(this.assets.img("basetiles"),80,48,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 10:
                    ctx.drawImage(this.assets.img("basetiles"),96,48,16,16,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;

                //lamps:
                case 11:
                    ctx.drawImage(this.assets.img("basetiles"),0,32,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.drawImage(this.assets.img("basetiles"),32,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                case 12:
                    ctx.drawImage(this.assets.img("basetiles"),0,32,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.drawImage(this.assets.img("basetiles"),32,32,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                
                //rocks:
                case 13:
                    ctx.drawImage(this.assets.img("basetiles"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    ctx.drawImage(this.assets.img("basetiles"),64,64,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 14:
                    ctx.drawImage(this.assets.img("basetiles"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    ctx.drawImage(this.assets.img("basetiles"),96,64,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 15:
                    ctx.drawImage(this.assets.img("basetiles"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    ctx.drawImage(this.assets.img("basetiles"),64,96,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 16:
                    ctx.drawImage(this.assets.img("basetiles"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    ctx.drawImage(this.assets.img("basetiles"),96,96,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                case 17:
                    ctx.drawImage(this.assets.img("basetiles"),0,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    ctx.drawImage(this.assets.img("basetiles"),96,96,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.drawImage(this.assets.img("enemy"),96,0,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                //summon spells:
                case 18:
                    ctx.drawImage(this.assets.img("basetiles"),0,96,32,32,c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);    
                    break;
                default:
                    cor = "black";
            }
        }
    }
}