const spreadSheetContainer = document.querySelector('#spreadsheet-container');
const exportBtn = document.querySelector('#export-btn');

const ROWS = 10;
const COLS = 10;
const spreadsheet = [];

class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

exportBtn.onclick = () => {
  const csv = [];
  for (let i = 1; i < spreadsheet.length; i++) {
    console.log(
      spreadsheet[i].filter((item) => !item.isHeader).map((item) => item.data)
    );
    csv.push(
      spreadsheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(',')
    );
  }

  const csvObj = new Blob([csv]);
  const csvUrl = URL.createObjectURL(csvObj);

  const a = document.createElement('a');
  a.href = csvUrl;
  a.download = 'Spreadsheet File Name.csv';
  a.click();
};

initSpreadsheet();

function initSpreadsheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let cellData = '';
      let isHeader = false;

      if (i === 0) {
        isHeader = true;
        if (j > 0) cellData = String.fromCharCode(j + 64);
      }
      if (j === 0) {
        isHeader = true;
        if (i > 0) cellData = i;
      }

      const rowName = i;
      const columnName = String.fromCharCode(j + 64);
      const cell = new Cell(
        isHeader,
        isHeader,
        cellData,
        i,
        j,
        rowName,
        columnName,
        false
      );
      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }

  drawSheet();
  console.log(spreadsheet);
}

function createCellEl(cell) {
  const cellEl = document.createElement('input');
  cellEl.className = 'cell';
  cellEl.id = `cell_${cell.row}${cell.column}`;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;

  if (cell.isHeader) cellEl.classList.add('header');

  cellEl.onclick = () => handleCellClick(cell);
  cellEl.onchange = (e) => handleOnChnage(e.target.value, cell);

  return cellEl;
}

function handleOnChnage(data, cell) {
  cell.data = data;
}

function handleCellClick(cell) {
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeader = spreadsheet[cell.row][0];

  console.log(columnHeader, rowHeader);
  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);

  clearHeaderActiveStates();

  columnHeaderEl.classList.add('active');
  rowHeaderEl.classList.add('active');
}

function clearHeaderActiveStates() {
  const headers = document.querySelectorAll('.header');

  // 배열이 아닌 Collection을 컨트롤할때는 forEach로 해야함
  headers.forEach((header) => {
    header.classList.remove('active');
  });
}

function getElFromRowCol(row, col) {
  return document.querySelector('#cell_' + row + col);
}

function drawSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerEl = document.createElement('div');
    rowContainerEl.className = 'cell-row';
    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cell = spreadsheet[i][j];
      rowContainerEl.append(createCellEl(cell));
    }
    spreadSheetContainer.append(rowContainerEl);
  }
}
