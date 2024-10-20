export default function GridBody({ children }: { children: any }) {
  return (
    <div className="w-full flex-grow flex flex-col relative overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}
