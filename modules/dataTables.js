import tableHeader from './tableHeader.js';
import tableBody from './tableBody.js';

class dataTables {
    constructor(data, kolom) {
        this.data = data;
        this.kolom = kolom;
    }

    generateTable() {
        const table = document.createElement('table');
        table.className = 'table';

        // Generate header
        const Theader = new tableHeader(this.kolom);
        table.appendChild(Theader.generateHeader());

        // Generate body
        const Tbody = new tableBody(this.data, this.kolom);
        table.appendChild(Tbody.generateBody());

        return table;
    }
}

export default dataTables;