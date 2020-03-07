import React from 'react'
import Gallery from '../gallery/gallery'

import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage-wrapper'>
    <h2 className='subtitle'>Memories</h2>
    <p className='top-text'>You've been one of the best friends a man could ever ask for and 
        done more for me than most will ever know. You're my ride-or-die homie and
        I couldn't be more thankful for that fact. Happy Birthday you son of bitch and 
        I look forward to celebrating many more with you. 
    </p>
    <p className='top-text'> I'm also a broke ass bitch and I hate hallmark cards so instead you're getting a dope
        site. Enjoy lol.
    </p>

    <Gallery />
    </div>
)

export default HomePage