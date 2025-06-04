import LineChart from '../../components/LineChart';
import "../Dashboard/Dashboard.css"
export const Dashboard = () => {
  const data = {
    labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun','Iyul','Avgust','Sentabr','Oktyabr','Noyabr','Dekabr'], // Oylar
    values: [28, 79, 67,34, 81, 56,25,48,80,61,30,90],  // Sotuvlar yoki boshqa qiymatlar
  };
  return (
    <>
      <div div className=''>
      <h1 className='dashboard_title'>Dashboard</h1>
      <LineChart data={data} />
      </div>
    </>
  )
}
export default Dashboard