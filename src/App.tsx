import { Header } from './components/header'
import { AttendeeList } from './components/attendee-list'

function App() {
  return (
    <div className='max-w-[1216px] flex flex-col gap-2 mx-auto py-5'>
      <Header />
      <AttendeeList />
    </div> 
  )
}

export default App
