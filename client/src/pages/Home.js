import { React } from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-yellow-500 uppercase mb-6">
          buzz
        </h1>
        <h3 className="text-3xl md:text-4xl lg:text-6xl">
          The Apiary Managment tool
        </h3>
        <p className="flex text-2xl md:text-3xl lg:text-3xl p-20">
          Please Login to start using the application, then you can begin adding
          your apiarys and hives. make sure to create and download your custom
          QR codes to hang on your hives for quick access.
        </p>
      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built by Jim Whiteford</p>
        <div>
          <a href="/" className="mx-3 hover:opacity-75 duration-150">
            About us
          </a>
          |
          <a href="/" className="mx-3 hover:opacity-75 duration-150">
            Privacy
          </a>
          |
          <a href="/" className="mx-3 hover:opacity-75 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
