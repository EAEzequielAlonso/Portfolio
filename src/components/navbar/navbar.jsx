import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className = "bg-white px-6 shadow mb-3">
            <div className = "flex h-16 justify-between items-center max-w-6xl mx-auto">
                <button class = 'transition-colors focus:ring-2 focus:ring-slate-200 -ml-2 p-1 rounded text-slate-500 hover:bg-sky-500 hover:text-slate-100 md:hidden' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div class = "flex items-center">
                    <a href="#" className = "text-sky-500 hover:rotate-6 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                    </a>
                    <div class = "space-x-8 ml-8 hidden md:flex">
                        <Link href="/" class ="px-3 py-2 text-sky-500">Home</Link>
                        <Link href="/jobs" class ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Jobs</Link>
                        <Link href="/projects" class ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Proyects</Link>
                        <Link href="/studies" class ="px-3 py-2 text-slate-600 hover:text-sky-500 transition-colors">Studies</Link>
                        <Link href="/contact" class ="px-3 py-2 text-white font-bold rounded-lg bg-sky-400 hover:bg-sky-600 transition-colors">Contact</Link>
                    </div>
                </div>
                <div class= "flex ">
                    <button class = 'transition-colors focus:ring-2 focus:ring-slate-200 rounded-full text-slate-500 hover:text-sky-500 focus:ring-offset-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button>
                    {/* <button class = 'transition-colors ml-4 focus:ring-2 focus:ring-slate-200 rounded-full text-slate-500 hover:text-sky-500 focus:ring-offset-1'>
                        <img class = "h-10 w-10 rounded-full" 
                            src="https://ui-avatars.com/api?name=Ezequiel+Alonso" alt = "Ezequiel Alonso" />
                    </button> */}
                </div>
            </div>
            <div class = "space-y-1 pb-3 pt-2 border-t md:hidden">
                <a href="#" class="px-3 py-2 rounded-md bg-sky-500 block text-white">Home</a>
                <a href="#" class="px-3 py-2 rounded-md transition-colors text-slate-700 hover:bg-sky-500 block hover:text-white">About</a>
                <a href="#" class="px-3 py-2 rounded-md transition-colors text-slate-700 hover:bg-sky-500 block hover:text-white">Proyect</a>
                <a href="#" class="px-3 py-2 rounded-md transition-colors text-slate-700 hover:bg-sky-500 block hover:text-white">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;