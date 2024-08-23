import searchIcon from '../assets/search.svg'

export default function Search() {
  return (
    <div className="relative search-wrapper">
      <input className="search-input" placeholder="Search for notes" />
      <button className="absolute btn search-btn">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  )
}
