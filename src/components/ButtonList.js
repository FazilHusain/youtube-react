import React from 'react'
import Button from './Button'

const ButtonList = () => {

  //const list = ["All", "Gaming", "Songs", "Soccer", "Cricket", "Cooking", "Circket", "Valentines", "Pubg", "Movies"];
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Cricket"/>
      <Button name="Valentine"/>
    </div>
  )
}

export default ButtonList
