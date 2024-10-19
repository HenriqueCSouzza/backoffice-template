export default function Header({ children }: { children: any }) {
  return (
    <div className="w-full h-12 flex whitespace-nowrap overflow-hidden bg-slate-100 font-bold">
      {children}
    </div>
  );
}
