import { Message } from "./Message"

export const Wrapper = ({ messages, name }) => {

    return (
        <>
            {messages.map((message, i) => <Message key={i} message={message} name={name} />)}
        </>
    )
}