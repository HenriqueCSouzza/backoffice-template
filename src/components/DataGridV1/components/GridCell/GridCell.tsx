export default function GridCell({ children }: { children: any }) {
  return (
    <div className="h-10 px-4 flex items-center w-full min-w-40">
      {children}
    </div>
  );
}
