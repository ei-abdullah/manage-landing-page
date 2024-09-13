import { useState } from "react";

function Search() {
    const [query, setQuery] = useState();
    return (
        <input className="px-4 transition-all w-4/5 rounded-3xl border-red border-2 outline-red "
            placeholder="Updates in your inbox..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default Search
