"use client"
import { Alert } from "@heroui/alert";

const Aviso = () => {
    return (
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col w-full">
            {["default", "primary", "secondary", "success", "warning", "danger"].map((color) => (
              <div key={color} className="w-full flex items-center my-3">
                <Alert color={color} title={`This is a ${color} alert`} />
              </div>
            ))}
          </div>
        </div>
      );
}


export default Alert