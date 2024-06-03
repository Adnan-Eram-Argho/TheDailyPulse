import { Link } from "react-router-dom"


function NewsTypes() {
  return (
    <>
      <h1 className="text-center mt-5 text-4xl">which type of news do you want to read?</h1>
      <div className="flex flex-wrap items-center justify-center mt-5" >
        <Link to={'technology'} className="btn mr-5 bg-secondary-content mt-2">Technology</Link>
        <Link to={"business"} className="btn mr-5 bg-secondary-content mt-2">Business</Link>
        <Link to={"environment"} className="btn mr-5 bg-secondary-content mt-2">Environment</Link>
        <Link to={'local'} className="btn mr-5 bg-secondary-content mt-2">Local</Link>
        <Link to={'health'} className="btn mr-5 bg-secondary-content mt-2">Health</Link>
        <Link to={'world'} className="btn mr-5 bg-secondary-content mt-2">World</Link>
      </div>
    </>
  )
}

export default NewsTypes
