import React , { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Contents() {
    const { isDark } = useContext(ThemeContext);
    console.log( isDark );
  return (
    <div className='content'>{isDark ? "1" : "2"}</div>
  )
}
