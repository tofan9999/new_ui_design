import React from 'react'

function maps() {
  return (
    <div className="w-[98%] max-md:w-[98vw]  md:mx-4 mt-6 h-[400px]">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863489522623!2d144.96328031531587!3d-37.814217979751844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b0d1e0c89cf!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1700000000000"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default maps