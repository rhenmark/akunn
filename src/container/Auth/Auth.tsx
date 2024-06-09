import Button from "@rm-ui/button/Button";
import { useState } from "react";

const Auth = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-black w-full h-full p-4">
      <div className="container mx-auto h-screen px-4 grid grid-flow-row place-items-center gap-4">
        <form className="grid gap-4 w-full">
          <input type="email" placeholder="Email" className="h-[40px] p-4"  />
          <input type="password" placeholder="Password"  className="h-[40px] p-4"  />
        <Button
          classNames={{
            root: "p-4 w-full bg-blue-500 mt-4"
          }}
          onClick={() => setCount(count + 1)}
        >
          Login
        </Button>
        </form>
        
      </div>
    </div>
  );
};

export default Auth;
