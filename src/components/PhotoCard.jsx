import React from 'react'

const profile = import.meta.env.VITE_PROFILE

const PhotoCard = () => {
  return (
    <div>
        <img src={profile} alt='Your photo'/>
    </div>
  )
}

export default PhotoCard