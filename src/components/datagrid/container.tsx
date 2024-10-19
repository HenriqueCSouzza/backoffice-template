export default function Container({ children }: { children: any }) {
  return (
    <div className="overflow-hidden h-full flex-auto flex flex-col rounded-lg">
      {children}
    </div>
  );
}
