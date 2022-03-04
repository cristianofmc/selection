import Link from 'next/link';

function Home(){
    return <div className='bg-slate-800'>
        <h1>Selections - teste</h1>
        <Link href="/about"><a>Sobre</a></Link>
        <h1 className="text-orange-600 text-3xl">HEllo</h1>
    </div>
}

export default Home