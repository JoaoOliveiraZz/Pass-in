import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'

export function AttendeeList(){

    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'> 
                <h1 className="font-bold text-2xl">Participantes</h1>

                <div className='flex items-center gap-3 w-72 border border-white/10 py-1.5 px-3 rounded-lg'>
                    <Search className='size-4 text-emerald-300' />
                    <input type="text" placeholder="Buscar participante..." className='bg-transparent outline-none h-auto p-0 border-0' />
                </div>
            </div>

            <div className='border border-white/10 rounded-lg'>
                <table className='w-full'>
                    <thead>
                        <tr className='px-4 py-3 border-b border-white/10' >
                            <th className='font-semibold text-white text-left text-sm px-4 py-3'><input className='rounded bg-black/20 border border-white/10 size-4'  type="checkbox" /></th>
                            <th className='font-semibold text-white text-left text-sm px-4 py-3'>Código</th>
                            <th className='font-semibold text-white text-left text-sm px-4 py-3'>Participante</th>
                            <th className='font-semibold text-white text-left text-sm px-4 py-3'>Data da inscrição</th>
                            <th className='font-semibold text-white text-left text-sm px-4 py-3'>Data do check-in</th>
                            <th className='font-semibold text-white text-left text-sm px-4 py-3'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.from({length: 6}).map((_, index) => {
                                return (
                                    <tr key={index} className='px-4 py-3 border-b border-white/10'> 
                                        <td style={{width: 48}} className='px-4 py-3 text-left text-zinc-300'><input className='rounded bg-black/20 border border-white/10 size-4' type="checkbox" /></td>
                                        <td className='px-4 py-3 text-left text-zinc-300'>87234</td>
                                        <td className='px-4 py-3 text-left text-zinc-300 flex flex-col gap-1'>
                                            <span className='text-white font-semibold text-sm'>João Victor de Lima Oliveira</span>
                                            <span className='font-normal text-xs'>joaolima.gxp@gmail.com</span>
                                        </td>
                                        <td className='px-4 py-3 text-left text-zinc-300'>7 dias atrás</td>
                                        <td className='px-4 py-3 text-left text-zinc-300'>3 dias atrás</td>
                                        <td style={{width: 64}} className='px-4 py-3 text-left text-zinc-300'>
                                            <button className='bg-black p-1.5 rounded-md border border-white/10'>
                                                <MoreHorizontal />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr className='px-4 py-3 text-zinc-300'>
                            <td className='px-4 py-3 text-sm' colSpan={3}>Mostrando 10 de 228 itens</td>
                            <td className='px-4 py-3 text-right text-sm' colSpan={3}>
                                
                                <div className='inline-flex gap-8 items-center'>

                                    <span>Página 1 de 11</span>
                                    
                                    <div className='flex gap-1.5'>
                                        <button className='bg-white/10 p-1.5 rounded-md border border-white/10'>
                                            <ChevronsLeft />
                                        </button>
                                        <button className='bg-white/10 p-1.5 rounded-md border border-white/10'>
                                            <ChevronLeft />
                                        </button>
                                        <button className='bg-white/10 p-1.5 rounded-md border border-white/10'>
                                            <ChevronRight />
                                        </button>
                                        <button className='bg-white/10 p-1.5 rounded-md border border-white/10'>
                                            <ChevronsRight />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )

}