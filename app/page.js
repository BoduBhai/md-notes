import Login from "@/components/login";

export default function Home() {
    return (
        <main id='hero'>
            <div className='hero-img'>
                <img src='/hero-img.jpeg' alt='Hero Image' />
            </div>
            <div className='hero-login'>
                <Login />
            </div>
        </main>
    );
}
