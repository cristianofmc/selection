import SearchIcon from "./Icons/SearchIcon";

const SearchInput = (props) => {
    return(
        <div className="mx-4 ">
            <form>   
                <div className="grid lg:gap-x-8 lg:grid-cols-4 sm:grid-cols-2 ">
                    <div className="lg:col-start-2 lg:col-end-4 sm:col-start-1 sm:col-end-3 ">
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <input type="text" id="tag-search" 
                        className="outline-none block p-4 pl-10 w-full text-sm text-black/85 rounded-full border border-neutral-300 hover:shadow hover:shadow-neutral-800/20 focus:shadow focus:shadow-neutral-800/20" 
                        placeholder="Search Tags" required/>               
                    </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchInput;