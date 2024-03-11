// import Image from "next/image";
import ThemeSwitch from "./ThemeSwitcher";
export default function Home() {
  return (
    <>
      {/* <div className="flex min-h-screen flex-col items-center justify-between p-10 bg-white">
        <header>
          <nav className="text-black font-bebasBold">M.S Traders.</nav>
        </header>
      </div> */}

      <nav className="flex items-center justify-between h-16 bg-gray-800 text-white px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold">M.S Traders.</span>
        </div>

        <ThemeSwitch />

        <ul className="hidden md:flex space-x-4 list-none">
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#">Menu</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#">Menu</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#">Menu</a>
          </li>
        </ul>

        {/* <button id="menu-toggle" className="md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-lineCap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16v12H4zm2-2a2 2 0 10-4 0 2 2 0 004 0zM2 16a2 2 0 104 0 2 2 0 00-4 0z"
            />
          </svg>
        </button> */}

        <div
          id="menu"
          className="fixed inset-0 bg-gray-800 opacity-0 md:hidden transition-all duration-300 ease-in-out"
        >
          <div className="px-4 py-16 space-y-4 text-center text-white">
            <a
              href="#"
              className="block py-2 px-4 rounded-md hover:bg-gray-700"
            >
              menu
            </a>
            <a
              href="#"
              className="block py-2 px-4 rounded-md hover:bg-gray-700"
            >
              menu
            </a>
            <a
              href="#"
              className="block py-2 px-4 rounded-md hover:bg-gray-700"
            >
              menu
            </a>
          </div>
        </div>
      </nav>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
