export default function Header({ children }: { children: any }) {
  return (
    <div className="w-full h-12 flex items-center whitespace-nowrap font-bold border-b flex-grow sticky z-10 top-0 bg-white">
      {children}
    </div>
  );
}
