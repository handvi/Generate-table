class tableHeader {
    constructor(kolom) {
        this.kolom = kolom;
    }

    generateHeader() {
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        this.kolom.forEach(element => {
            const th = document.createElement('th');
            th.innerHTML = element;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        return thead;
    } 
}

export default tableHeader;