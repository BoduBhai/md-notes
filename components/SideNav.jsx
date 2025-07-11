export default function SideNav(props) {
    const notes = [
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
        "hello",
        "world",
    ];
    const showNav = true;

    return (
        <section className={"nav " + (showNav ? "" : " hidden-nav ")}>
            <h1 className='text-gradient'>BrainBin</h1>
            <h6>Easy notes</h6>
            <button>
                <h6>New Note</h6>
                <i className='fa-solid fa-plus'></i>
            </button>
            <div className='notes-list'>
                {notes.length === 0 ? (
                    <p>You have 0 notes</p>
                ) : (
                    notes.map((note, index) => {
                        return (
                            <button
                                key={index}
                                className='card-button-secondary'
                            >
                                <p>{note}</p>
                                <small>DateTIme</small>
                                Delete BTN
                            </button>
                        );
                    })
                )}
            </div>
            <div className='full-line'></div>
            <button>
                <h6>Logout</h6>
                <i className='fa-solid fa-right-from-bracket'></i>
            </button>
        </section>
    );
}
