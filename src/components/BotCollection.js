import React from "react";
import BotCard from "./BotCard"

function BotCollection({allBots, addToArmy, deleteBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {
          allBots.map((bot) => {
            return(
              <div>
                <div onClick={() => { addToArmy(bot) }}>
                  <BotCard bot={bot} />
                </div>
                <button className="ui mini red button" onClick={() => { deleteBot(bot) }}>x</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;
