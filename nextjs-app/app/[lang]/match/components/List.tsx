import Button from "@/components/atoms/Button";
import QuantitySelector from "@/components/molecules/match/QuantitySelector";

const List = () => {
  return (


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-cyan-950 dark:text-gray-400">
          <tr>

            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-100">
 
            <td className="px-6 py-4 font-semibold text-gray-600">
              Apple Watch
              <p className="mb-3 max-w-[200px] font-mono text-xs font-medium dark:text-gray-400 truncate">
                  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
            </td>
            <td className="px-6 py-4">
                <QuantitySelector min={1} max={5} defaultValue={1} />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-600">
              $599
            </td>
            <td className="px-6 py-4">
              <Button size="sm" fullWidth={true} >Book now</Button>
            </td>
          </tr>
          
          
        </tbody>
      </table>
    </div>

  )
}

export default List;