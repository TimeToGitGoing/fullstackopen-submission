const SearchFilter = ({newSearch, handleFilterName}) => (
    <div>filter shown with <input value={newSearch} onChange={handleFilterName}/></div>
)

export default SearchFilter