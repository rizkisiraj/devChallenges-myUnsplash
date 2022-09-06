import { ReactComponent as Logo } from '../../assets/my_unsplash_logo.svg'

const Header = () => {
    return (
        <header className='px-24 py-8 w-full flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <Logo />
                <div className='border border-[#BDBDBD] flex items-center p-5 gap-3 rounded-2xl'>
                    <span class="material-symbols-outlined text-[#BDBDBD]">
                        search
                    </span>
                    <input className='focus:outline-none' type="text" placeholder='Search by name' />
                </div>
            </div>
            <button className='bg-[#3DB46D] text-white py-5 px-3 rounded-2xl font-bold'>Add a photo</button>
        </header>
    )
}

export default Header;