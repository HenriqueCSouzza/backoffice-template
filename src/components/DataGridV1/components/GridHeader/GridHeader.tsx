export default function Header({ children }: { children: any }) {
  return (
    <div className="w-full h-12 flex items-center whitespace-nowrap overflow-hidden font-bold border-b">
      {children}
    </div>
  );
}
