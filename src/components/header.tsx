import NLWUniteIcon from '../assets/NLW-Unite-Icon.svg'

export function Header(){

    return (
        <div className='flex gap-5 items-center py-2'>
            <img src={NLWUniteIcon} alt="Nlw Unite Logo" />
            <nav className='flex gap-5 items-center'>
                <a href="" className='text-zinc-300 font-medium text-sm'>Eventos</a>
                <a href="" className=' font-medium text-sm'>Participantes</a>
            </nav>
        </div>
    )


}