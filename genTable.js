class genTable {
    constructor(data,kolom) {
        this.data = data;
        this.kolom = kolom;
    }

    generateTable() {
        const table = document.createElement('table');
        table.className =  'table';
        
        const thead = document.createElement('thead');
        const hederRow = document.createElement('tr');
        this.kolom.forEach(col => {
            const th = document.createElement('th');
            th.innerHTML = col;
            hederRow.appendChild(th);
        });
        thead.appendChild(hederRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        this.data.forEach(row => {
            const tr = document.createElement('tr');
            this.kolom.forEach(col => {
                const td = document.createElement('td');
                td.innerText = row[col];
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        return table;
    }
}