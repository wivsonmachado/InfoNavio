let navio = document.getElementById("navio") as HTMLInputElement
let imo = document.getElementById("imo") as HTMLInputElement
let bandeira = document.getElementById("bandeira") as HTMLInputElement
let armador = document.getElementById("armador") as HTMLInputElement

class NavioInfos {
    nomeNavio: string;
    numeroImo: number;
    bandeiraRegistro: string;
    nomeArmador: string;

    constructor(nome: string, imo: number, bandeira: string, armador: string) {
        this.nomeNavio = nome
        this.numeroImo = imo
        this.bandeiraRegistro = bandeira
        this.nomeArmador = armador
    }

    createRowTable() {
        let tbody: HTMLTableElement = document.getElementById('tbody') as HTMLTableElement

        let newTr = document.createElement('tr')
        newTr.innerHTML = `<td>${this.nomeNavio}</td><td>${this.numeroImo}</td><td>${this.bandeiraRegistro}</td><td>${this.nomeArmador}</td>`
        tbody.appendChild(newTr)
    }

}

const btn: HTMLElement = document.getElementById('btn') as HTMLElement

btn.addEventListener('click', () => {
    if (navio.value == '' || imo.value == '' || bandeira.value == '' || armador.value == '') {
        alert('Preencha todos os campos')
    } else {
        if (isNaN(Number(imo.value))) {
            alert("IMO precisa ser um número")
        } else {
            const newVessel = new NavioInfos(navio.value, Number(imo.value), bandeira.value, armador.value)

            newVessel.createRowTable()
            navio.value = ''
            imo.value = ''
            bandeira.value = ''
            armador.value = ''
        }
    }
})