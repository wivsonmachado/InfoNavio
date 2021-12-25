"use strict";
let navio = document.getElementById("navio");
let imo = document.getElementById("imo");
let bandeira = document.getElementById("bandeira");
let armador = document.getElementById("armador");
class NavioInfos {
    constructor(nome, imo, bandeira, armador) {
        this.nomeNavio = nome;
        this.numeroImo = imo;
        this.bandeiraRegistro = bandeira;
        this.nomeArmador = armador;
    }
    createRowTable() {
        let tbody = document.getElementById('tbody');
        let newTr = document.createElement('tr');
        newTr.innerHTML = `<td>${this.nomeNavio}</td><td>${this.numeroImo}</td><td>${this.bandeiraRegistro}</td><td>${this.nomeArmador}</td>`;
        tbody.appendChild(newTr);
    }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const newVessel = new NavioInfos(navio.value, Number(imo.value), bandeira.value, armador.value);
    newVessel.createRowTable();
    navio.value = '';
    imo.value = '';
    bandeira.value = '';
    armador.value = '';
});
