export default function GridContainer({ children }: { children: any }) {
  return (
    <div className="overflow-hidden h-full flex-auto flex flex-col rounded-lg border">
      {children}
    </div>
  );
}
