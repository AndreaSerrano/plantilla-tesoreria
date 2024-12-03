containerMenu.innerHTML = `<nav class="w-full h-fit bg-[#125785] font-semibold px-2 text-white flex justify-evenly items-center flex-wrap fixed">
    <a href="" class="w-2/5">
        <img id="logo-home" class="h-12" src="../Assets/images/Logotipo-Jarrey-CMYK.jpg" alt="Logo Jarrey">
    </a>
    <div class="block lg:hidden">
        <button id='btn-menu' class="flex items-center px-3 py-2 border rounded hover:text-sky-100 hover:border-sky-100">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div id='menu' class="w-full p-1 block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div class="w-full text-sm text-center lg:flex-grow">
            <a href="#hero-home" class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-400 mr-4 lg:hover:border-b-2 lg:hover:border-sky-400">
                Inicio
            </a>
            <a href="#about-me" class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-400 mr-4 lg:hover:border-b-2 lg:hover:border-sky-400">
                Pendientes
            </a>
            <a href="#hobbies" class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-400 mr-4 lg:hover:border-b-2 lg:hover:border-sky-400">
                Pagados
            </a>
            <a href="#portfolio" class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-400 mr-4 lg:hover:border-b-2 lg:hover:border-sky-400">
                Cuadrillas
            </a>
        </div>
    </div>
</nav>`;