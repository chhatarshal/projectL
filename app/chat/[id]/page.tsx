import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

const ChatPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Chat />
            <ChatInput />
        </div>)
}
export default ChatPage;