"use client";

export default function Resume() {
  return (
    <main className="flex h-full items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-[80%] h-[40%] bg-white rounded-lg shadow-lg p-12 flex flex-col items-center justify-center">
        <h1 className="text-[1.5rem] font-semibold text-gray-900 mb-6 text-center">
          Access the Documents
        </h1>
        <p className="text-[1rem] text-gray-700 mb-10 text-center">
          You can access all the important documents by clicking the button
          below.
        </p>
        <a
          href="#"
          className="w-30 h-10 flex items-center justify-center bg-blue-400 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Click here
        </a>
      </div>
    </main>
  );
}
