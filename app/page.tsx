import Header from "@/app/header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white">
      <Header />
      <div className="flex flex-col items-center text-center mt-20">
        <h2 className="text-5xl font-bold text-blue-700 mb-4">Practice Presenting.</h2>
        <p className="text-xl text-gray-700 mb-8">Transform your presentation prep with ease.</p>
        <button className="px-6 py-3 text-lg bg-white text-blue-700 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white">
          Start Presenting
        </button>
      </div>
      <div className="relative mt-20">
        <div className="absolute inset-0 bg-blue-700 opacity-50 rounded-lg shadow-lg" style={{ width: 200, height: 150 }}></div>
        <div className="relative p-6">
          <div className="bg-blue-500 w-48 h-32 rounded-lg shadow-lg"></div>
        </div>
      </div>
    </main>
  );
}