import GridAction from "../components/GridAction/GridAction";
import GridActionHeaderCell from "../components/GridActionHeaderCell/GridActionHeaderCell";
import GridCell from "../components/GridCell/GridCell";
import GridCellSelected from "../components/GridCellSelected/GridCellSelected";
import GridContainer from "../components/GridContainer/GridContainer";
import GridFooter from "../components/GridFooter/GridFooter";
import GridHeader from "../components/GridHeader/GridHeader";
import GridRow from "../components/GridRow/GridRow";

const DataGrid = <T extends object>({
  columns,
  rows,
}: {
  columns: Column<T>[];
  rows: T[];
}) => {
  return (
    <GridContainer>
      <GridHeader>
        <GridCellSelected />
        {columns.map((column, columnIndex) => (
          <GridCell key={columnIndex}>{column.label}</GridCell>
        ))}
        <GridActionHeaderCell />
      </GridHeader>
      {rows.map((row, rowIndex) => (
        <GridRow key={rowIndex}>
          <GridCellSelected />
          {columns.map((column, columnIndex) => (
            <GridCell key={columnIndex}>{row[column.name]}</GridCell>
          ))}
          <GridAction />
        </GridRow>
      ))}
      <GridFooter />
    </GridContainer>
  );
};

export default DataGrid;
