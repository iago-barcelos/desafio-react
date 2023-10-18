import { useState } from "react"

type FilterChange = {
  onFilterChange: (filter:string) => void
}

function FilterBar({ onFilterChange }: FilterChange) {
  const filters = ["Mais Recentes","Release","Notícias","Favoritas"];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

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
