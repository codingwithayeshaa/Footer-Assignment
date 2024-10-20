export default function Geader(){
    return(
        <header>
            <nav className="bg-blue-400 h-6 flex items-center justify-between">
            <div className="flex items-center ml-6">
               <h1 className="text-white ml-20 font-bold font-700 text-2xl">Welcome</h1>
            </div>
                <ul className="flex space-x-12 text-white mr-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </nav>
        </header>
    )
}


