import React from 'react'

const ContactBanner = () => {
  return (
    <section className=' pl-16 py-10 w-full border flex justify-around items-center bg-fe-blue'>
        <div className='flex justify-center items-center basis-1/5 gap-3'>
            <div class="rounded-full h-12 w-12 flex items-center justify-center bg-white">
                <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
            </div>
            <div className='no-wrap'>
                <p>
                    <strong className='text-rose-700'>Call Us</strong>
                    <br /><strong>+880 1234 5678 90</strong> 
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center basis-1/5 gap-3'>
            <div class="rounded-full h-12 w-12 flex items-center justify-center bg-white">
                <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            </div>
            <div className=''>
                <p>
                    <strong className='text-rose-700'>Contact US</strong>
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center basis-2/6 gap-3'>
            <div class="rounded-full h-12 w-12 flex items-center justify-center bg-white">
                <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 2a2 2 0 012-2h12a2 2 0 012 2v16l-8-4-8 4V2z" />
                    <path d="M9 9v2h2V9H9zm0 4v2h2v-2H9z" />
                </svg>
            </div>
            <div className=''>
                <p>
                    <strong className='text-rose-700'>Chat with
                    an Expert</strong>
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center basis-1/4 gap-3'>
        <div class="rounded-full h-12 w-12 flex items-center justify-center bg-white">
  <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41zM7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
  </svg>
</div>
            <div className=''>
                <p>
                    <strong className='text-rose-700'>My Reorders</strong>
                </p>
            </div>
           
        </div>
    </section>
  )
}

export default ContactBanner