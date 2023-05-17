import ListeArticle from "./components/ListeaArticle";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function App () {
  return (
    <div className=" bg-gray-200">
      <NavBar />
      <div className="flex max-w-5xl mx-auto space-x-4" >
        <ListeArticle/>
        <Menu/>

      </div>
    </div>
  )
}
export default App ;