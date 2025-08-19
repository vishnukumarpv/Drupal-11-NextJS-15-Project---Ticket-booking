import Information from "./components/Information";
import List from "./components/List";
import {StadiumSvg} from "./components/stadiumSvg";


const MatchPage = () => {
  return (
    <div className="container mx-auto py-5">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">Match Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="ven-layout py-5 flex justify-center">
          <div className="max-w-[220px]">
            <StadiumSvg />
          </div>
          
        </div>
        <div className="py-5">
          <List />
        </div>
      </div>
      <div className="py-5">
        <Information />
      </div>
    </div>
  )
}

export default MatchPage;