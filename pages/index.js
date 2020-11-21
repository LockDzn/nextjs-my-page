export default function({ user }) {
    return (
        <>
            <header>
                <ul className="itens">
                    <div className="title">
                    <li><h1>{user.login}</h1></li>
                    </div>
                    <div className="resto">
                        <li><a href="index.html">Home</a></li>
                        <li><a href={`https://twitter.com/${user.twitter_username}`} target="_blank">Contato</a></li>
                        <li><a href="">Page</a></li>
                    </div>
                </ul>
            </header>
            <div className="grid">
                <div className="main">
                    <div className="container">
                        <img src={user.avatar_url} alt="Foto de Ryan" width="200" />
                        <div className="texts">
                            <h1>Eu sou o <span className="title-blue">{user.name}</span></h1>
                            <p>{user.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const response = await fetch(`https://api.github.com/users/lockdzn`);
    const data = await response.json();

    return {
        props: {
            user: data,
        },
        revalidate: 10
    }
};