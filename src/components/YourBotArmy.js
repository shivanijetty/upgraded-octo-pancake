import React from "react";


function YourBotArmy({ army, releaseBot}) {
  
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {
            army.map((bot) => {
              return(
                <div>
                  <div>
                    <img src={bot.avatar_url} onClick={() => { releaseBot(bot) }} />
                  </div>
                </div>
              )
            })
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
