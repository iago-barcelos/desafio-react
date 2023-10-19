import { useState } from "react"

type FilterChange = {
  onFilterChange: (filter:string) => void,
  stringFilter: string
}

function FilterBar({ onFilterChange, stringFilter }: FilterChange) {
  const filters = ["Mais Recentes","Release","Notícia","Favoritas"];
  const [activeFilter, setActiveFilter] = useState(stringFilter);

  function handleFilterClick(filter: string) {
    setActiveFilter(filter);
    onFilterChange(filter);
  }
  
  return(
    <div>
      {filters.map((filter) => (
        <button
          key={ filter }
          onClick={() => handleFilterClick(filter)}
          style={ { fontWeight: filter === activeFilter ? 'bold' : 'normal' } }
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterBar;
