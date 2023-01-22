import "./Search.css"
const Search=()=>{
    return(
        <div className="container">
        <form className="form">
        <input className="form-control" type="text" placeholder="Search world"/>
        <select className="select" >
        <option disabled >Select Region</option>
         <option >Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
        </select>
        </form>
        </div>
    )
}
export default Search