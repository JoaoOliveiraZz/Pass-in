import { Search } from 'lucide-react'

export function AttendeeList(){

    return(
        <div className='flex items-center gap-3'> 
            <h1 className="font-bold text-2xl">Participantes</h1>

            <div className='flex items-center gap-3 w-72 border border-white/10 py-1.5 px-3 rounded-lg'>
                <Search className='size-4 text-emerald-300' />
                <input type="text" placeholder="Buscar participante..." className='bg-transparent outline-none' />
            </div>
        </div>
    )

}