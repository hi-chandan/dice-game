import { useState } from "react";
import Startgame from "../componet/Startgame";
import Gameplay from "../componet/Gameplay";
export default function App() {
  const [isGameStart, SetisGameStart] = useState(false);

  const Startgametoggle = () => {
    SetisGameStart((pre) => !pre);
  };

  return (
    <section>
      {isGameStart ? <Gameplay /> : <Startgame toggle={Startgametoggle} />}
    </section>
  );
}
