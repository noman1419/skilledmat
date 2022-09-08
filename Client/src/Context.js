import { createContext, useState } from "react";
const chatContext = createContext();
const ChatContextProvider = ({ children }) => {
    const [id, setID] = useState(1);
    const [name, setName] = useState('')
    return (<chatContext.Provider value={{ id, setID, setName, name }}>{children}</chatContext.Provider>)
}
export default ChatContextProvider;
export { chatContext };