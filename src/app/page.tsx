import DataGrid from "@/components/DataGridV1";
type RowData = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};
const DataGridTailwindDynamic = () => {
  const columns: Column<RowData>[] = [
    { name: "id", label: "ID" },
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "age", label: "Age" },
  ];
  const rows: RowData[] = [
    { id: 1, firstName: "Jon", lastName: "Snow", age: 35 },
    { id: 2, firstName: "Cersei", lastName: "Lannister", age: 42 },
    { id: 3, firstName: "Jaime", lastName: "Lannister", age: 45 },
    { id: 4, firstName: "Arya", lastName: "Stark", age: 16 },
    { id: 5, firstName: "Daenerys", lastName: "Targaryen", age: 25 },
    { id: 6, firstName: "Ferrara", lastName: "Clifford", age: 44 },
  ];

  return <DataGrid columns={columns} rows={rows} />;
};

export default function Home() {
  return (
    <main className="w-1/2 mt-6 ml-6">
      <DataGridTailwindDynamic />
    </main>
  );
}
