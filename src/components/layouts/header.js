import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 w-auto h-10 flex">
      <div className="grid grid-cols-4">
        <div>
          <button onClick={() => navigate("/")}>Logo</button>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Header;
