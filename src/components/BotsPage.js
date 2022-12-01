import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from 'react';

function BotsPage() {
  //start here with your code for step one
  const [allBots, setAllBots] = useState([])
  const [army, setArmy] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:8002/bots")
      let res = await req.json()
      setAllBots(res)
    }
    request()
  }, [])

  const addToArmy = (bot) => {
    if (army.includes(bot)) return;
    setArmy([...army, bot])
  }

  const releaseBot = (bot) => {
    setArmy((army.filter((u) => u.id !== bot.id)))
    
  }

  const deleteBot = async (bot) => {
    let req = await fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: 'DELETE'
    })

    setAllBots((prevState) => {
      return(prevState.filter((u) => u.id !== bot.id))
    })
  }

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} />
      <BotCollection allBots={allBots} addToArmy={addToArmy} deleteBot={deleteBot} />
    </div>
  )
}

export default BotsPage;
