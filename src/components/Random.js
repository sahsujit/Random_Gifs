import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {
const {gif, loading, fetchData} = useGif();
  return (
    <div className='w-1/2 bg-green-500  border border-black rounded-lg
    flex flex-col items-center gap-y-5'>
        <h1 className='underline font-bold text-xl mt-[15px] uppercase'>A Random Gif</h1>
        {
            loading ? (<Spinner/>) :
             ( <img src={gif} width="450"/>)
        }
       
        <button onClick={()=>fetchData()}
        className='w-10/12 bg-white py-2 text-lg rounded-lg mb-[20px] uppercase'>
            Generate
        </button>
    </div>
  )
}

export default Random