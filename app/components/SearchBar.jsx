"use client"


const SearchBar = ({ onSearch, searchtrem }) => {
    const habdelSearch = (e) => {
        onSearch(e.target.value)
    }
    return (
        <div className="relative">
            <input
                value={searchtrem}
                onChange={habdelSearch}
                type="text"
                id="searchInput"
                placeholder="Search movies..."
                className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
            />
        </div>
    )
}

export default SearchBar