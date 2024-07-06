const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn1.iconfinder.com/data/icons/systemui-vol-2/21/user_male-256.png"
            alt="Tailwind chat bubble user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hello vro...</div>
      <div className="chat-footer opacity-50 text-cs flex gap-1 items-center">
        12:44
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
