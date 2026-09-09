import React from 'react'
import ICard from './ICard'

function ICardGallery() {
    const student = {
        college:'Abes Engineering College',
        roll:'2400320230073',
        name:'Sahil',
        branch:'CSE-24',
        pic:"https://w.wallhaven.cc/full/dp/wallhaven-dpq193.jpg"

    }

  return (
    <div>
        {/* <ICard college="Abes Engineering College" roll="2400320230073" name="Sahil" branch="CSE" pic="https://w.wallhaven.cc/full/dp/wallhaven-dpq193.jpg"/> */}

    <ICard data={student} />
    </div>
  )
}

export default ICardGallery