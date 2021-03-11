import { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { Footer } from '../components/Footer'
import { Sidebar } from '../components/Sidebar'

const ENDPOINT = 'https://academlo-chat.herokuapp.com/'

let socket

export const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT, {
            transports: ['websocket'], upgrade: false
        })

        setRoom(room)
        setName(name)

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                console.error(error)
            }
        })

    }, [location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message])
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })
    }, [])

    const sendMessage = (event) => {
        event.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div className="wasap">

            <div className="sidebar">
                <Sidebar users={users} />
            </div>

            <div className="content">
                <div className="message-header">
                    <Header room={room} />
                </div>
                <div className="message-wrap">
                    <Wrapper messages={messages} name={name} />
                </div>
                <div className="message-footer">
                    <Footer message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>

        </div>
    )
}