import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavData from './navdata'


export const Toolbar = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", scrollfixed)
    return () => {
      window.removeEventListener("scroll", scrollfixed)
    }

  }, [])
  const scrollfixed = () => {
    console.log(window.scrollY)
    if (window.scrollY > 400) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }
  return (
    <header className={`${show ? "bg-gray-200" : "bg-transparent"} fixed top-0 left-0 right-0 z-50`} >
      <div className='flex justify-between  items-center w-10/12 mx-auto h-[76px]'>

        <div>
          <h1 className='text-lg font-bold font-pangolin'>Logo</h1>
        </div>
        <div>
          <ul className='flex gap-14 font-normal items-center'>
            {
              NavData.map((item, index) => {
                if (item.children) {
                  return (<button className='relative block'>
                    {item.name}
                    <ul className='absolute bottom-0 top-full flex flex-col w-[100px]'>
                      {item.children.map((subItem, count) => {
                        return (
                          <li className=''> <Link to={subItem.to} key={count}> {subItem.name}</Link></li>
                        )
                      })}</ul>
                  </button>)
                }
                else {
                  return (<li> <Link to={item.to} key={index}> {item.name}
                  </Link></li>)
                }
              })
            }

          </ul>
        </div>
        <button className='bg-blue-900 pointer rounded p-2 text-white font-roboto'>Apply Now</button>
      </div>
    </header>
  )
}
