import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBackground = fromMe ? "bg-sky-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind chat bubble user avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBackground} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-cs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;

// const Message = () => {
//     return (
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img
//               src="https://cdn1.iconfinder.com/data/icons/systemui-vol-2/21/user_male-256.png"
//               alt="Tailwind chat bubble user avatar"
//             />
//           </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>Hello vro...</div>
//         <div className="chat-footer opacity-50 text-cs flex gap-1 items-center">
//           12:44
//         </div>
//       </div>
//     );
//   };

//   export default Message;
