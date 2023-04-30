import React, { useState } from 'react'

// TODO: Automate a newsletter with a GPT model
const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()
    if (error) {
      setStatus('error')
      return
    }
    
    setEmail('')
    setStatus('success')
    
    return
  }


  return (
    <>
      <div className='flex flex-col justify-around items-center w-full h-full p-4 my-6 md:mt-16'>
        <div className='flex justify-center items-center bg-gray-100 p-4 rounded-md shadow-md'>
          <div className='flex flex-col justify-center max-w-2xl mx-auto'>
            <div className='flex flex-col justify-between my-4 space-y-2'>
              <h1 className='text-4xl font-bold'>Newsletter</h1>
              <h3 className='text-xl italic'>OpenLiquid Newsletter</h3>
            </div>

            <div className='text-left my-4 break-words'>
              <h1 className='text-3xl font-bold py-4'>What is the OpenLiquid Newsletter?</h1>
              <p className='py-2 text-md'>
                The OpenLiquid Newsletter is a newsletter that is sent out at the beginning of each month. The newsletter contains updates on the OpenLiquid Open Source Fund, OpenLiquid's ORBIT trading agent, and other OpenLiquid projects. The newsletter also contains updates on the OpenLiquid community, including new members, new contributors, and new projects.
              </p>

              {/* Signup Form */}
              <div className='text-left my-4 break-words'>
                <h1 className='text-3xl font-bold py-4'>Sign up for the OpenLiquid Newsletter</h1>
                <p className='py-2 text-md'>
                  To sign up for the OpenLiquid Newsletter, please enter your email address below.
                </p>

                <form
                  className='flex flex-col justify-center items-center'
                  name='newsletter'
                  method='POST'
                  onSubmit={handleSubmit}
                >
                  <input type='hidden' name='form-name' value='newsletter' />
                  <input
                    className='w-full p-2 my-2 border-2 border-gray-300 rounded-md shadow-md'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className='w-full p-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md'
                    type='submit'
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Newsletter
