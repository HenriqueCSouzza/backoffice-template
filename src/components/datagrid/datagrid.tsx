import Cell from "./cell";
import Container from "./container";
import Header from "./header";
import Row from "./row";

const DataGrid = <T extends object>({
  columns,
  rows,
}: {
  columns: Column<T>[];
  rows: T[];
}) => {
  return (
    <Container>
      <Header>
        {columns.map((column, columnIndex) => (
          <Cell key={columnIndex}>{column.label}</Cell>
        ))}
      </Header>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <Cell key={columnIndex}>{row[column.name]}</Cell>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default DataGrid;
