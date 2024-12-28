class tableBody {
    constructor(data,kolom) {
        this.data = data;
        this.kolom = kolom;
    }

    generateBody() {
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
        return tbody;
    }
}

export default tableBody;