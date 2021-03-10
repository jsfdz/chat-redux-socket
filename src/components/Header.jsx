export const Header = ({ room }) => (
    <>
        <div className="info">
            <span className="user">{room}</span>
            <span className="time">online</span>
        </div>
        <div className="signout">
            <a href="/">signout</a>
        </div>
    </>
)