export const Message = ({ message: { user, text }, name }) => {

    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser ? (
            <div className="message-list right-msg">
                <div className="msg">
                    <div className="msg-info">
                        <div className="msg-info-name">{trimmedName}</div>
                    </div>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        ) : (
            <div className="message-list left-msg">
                <div className="msg">
                    <div className="msg-info">
                        <div className="msg-info-name">{user}</div>
                    </div>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        )
    )
}