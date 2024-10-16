function Navbar({ user, onLogout })  {
    if (!onLogout) {
      throw new Error('onLogout callback is required');
    }
    return (
        <li className="list-none bg-stone-500 relative">
          <div className="flex h-16 text-center items-center ml-24 text-sm p-8 gap-10 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            <h1 className="text-2xl italic text-lime-300 sm:text-3xl md:text-3xl lg:text-2xl xl:text-xl 2xl:text-lg">
              TodoList 📝📝
            </h1>
            <div className="ml-auto">
              {user && (
                <button
                  className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 italic"
                  aria-label="Logout"
                  onClick={onLogout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </li>
    );
    
    
}
    

export default Navbar