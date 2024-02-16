export default function BlogLayout({children}: {children: React.ReactNode}) {
  return (
    <section className=" flex flex-col items-center justify-center   w-screen  py-8 md:py-10">
      <div className="inline-block max-w-full   text-center justify-center">
        {children}
      </div>
    </section>
  );
}
