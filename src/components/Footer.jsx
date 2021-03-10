export const Footer = ({ setMessage, sendMessage, message }) => (
    <>
        <input
            className="input"
            type="text"
            placeholder="write you message"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>send message</button>
    </>
)