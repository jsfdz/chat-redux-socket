export const Sidebar = ({ users }) => {

    const date = new Date().toLocaleDateString()

    return (
        <>
            {users ? (
                <>
                    <span className="logo">Wasap</span>
                    <div className="list-wrap">
                        {users.map(({ name }) => (
                            <div key={name} className="list">
                                <div className="info">
                                    <span className="user">{name}</span>
                                    <span className="text">online</span>
                                </div>
                                <span className="time">{date}</span>
                            </div>
                        ))}
                    </div>
                </>
            ) : null}
        </>
    )
}