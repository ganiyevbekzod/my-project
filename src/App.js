import Header from "./components/Header"
import Main from "./components/Main"
import Search from "./components/Search"
const App=()=>{
    return(
        <div className="app">
            <Header/>
            <Search/>
        <div className="container">
        <div className="cards">
        <Main/>
        <Main/>
        <Main/>
        <Main/>
        <Main/>
        <Main/>
        <Main/>
        <Main/>
        </div>
        </div>
        </div>
    )
}
export default App 
