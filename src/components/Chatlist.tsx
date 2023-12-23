export default function Chatlist(props: any) {
    const chats = props.chats;
    const chatlist = chats.map((chat: any) =>
        <div className="chat">
            <img src="src/assets/icons8-female-profile-60.png" alt="i" />
            <p>
                {chat.name}
            </p>
        </div>
    );

    return (
        <div className="chatlist" >
            {chatlist}
        </div>
    );
}