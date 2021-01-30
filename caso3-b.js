class Celular {
    constructor(color, peso, tamano, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.tamano = tamano;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == false) {
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
        }
    }
    tomarFoto() {
        alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }
    grabarVideo() {
        alert(`grabando video en: ${this.resolucionDeCamara}`);
    }
    mobileInfo() {
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamano}</b></br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}



class CelularAltaGama extends Celular {
    constructor(color, peso, tamano, rdc, ram, rdce) {
    super(color, peso, tamano, rdc, ram);
    this.resolucionDeCamaraExtra = rdce;
    }
grabarVideoLento() {
    alert("Estás grabando en cámara lenta");
}
reconocimientoFacial() {
    alert("Vamos a iniciar un reconocimeinto facial");
}
infoAltaGama() {
    return this.mobileInfo() + `Resolución de Cámara Extra: ${this.resolucionDeCamaraExtra}`;
}
}


/*
celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
celular3 = new Celular("blanco","154g","5.9'","full hd","2GB");
*/




celular1 = new CelularAltaGama("rojo","130g","5.2'","4K","full hd");
celular2 = new CelularAltaGama("negro","142g","6'","4K","hd");




document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
    `)
/*
document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
    `)
*/
