export default function GridScrollbar({ children }: { children: JSX.Element }) {
  return (
    <div className="scrollbar-none overflow-scroll flex-grow flex flex-col">
      {children}
    </div>
  );
}
