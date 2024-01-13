import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
import jsonData from '../jsonData/jsondata.json'

export default function Home() {
  return (
  <>
      <main className="flex items-center justify-center">
        <div className="m-4 p-4 text-center">
          <h1 className="text-black font-bold text-4xl">Dashboard Visualization</h1>
        </div>
    </main>
      <h1 className="text-black font-bold text-2xl flex justify-center">Bar Chart</h1>
      <BarChart jsonData={jsonData}/>    
      <h1 className="text-black font-bold text-2xl flex justify-center mt-6">Pie Chart</h1>
      <PieChart jsonData={jsonData}/>
  </>
  )
}
