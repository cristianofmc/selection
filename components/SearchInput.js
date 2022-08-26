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
                        <input type="text" id="tag-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Tags" required/>               
                    </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchInput;