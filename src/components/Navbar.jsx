import { MdChatBubbleOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex items-center gap-3">
        <div className="bg-primary p-2 rounded-md" >
          <MdChatBubbleOutline />
        </div>
        <h2 className="text-primary">Chatty</h2>
      </div>
      <div className="flex gap-2 items-center">
        <IoSettingsOutline />
        <span>Settings</span>
      </div>
    </div>
  );
}
