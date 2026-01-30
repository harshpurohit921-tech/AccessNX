import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />

      {/* Scroll content */}
      <section className="min-h-screen bg-black text-white p-20">
        <h2 className="text-3xl font-semibold">
          Next Section
        </h2>
        <p className="mt-4 opacity-70">
          Background is now pure black.
        </p>
      </section>
    </>
  );
}

export default App;
