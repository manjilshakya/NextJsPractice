export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Hi From Layout</h1>
      {children}
    </>
  );
}
