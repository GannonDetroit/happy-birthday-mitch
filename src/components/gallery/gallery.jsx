import React from 'react'
import photo1 from '../../assets/mitch1.jpg'
import photo2 from '../../assets/mitch2.jpg'
import photo3 from '../../assets/mitch3.jpg'
import photo4 from '../../assets/mitch4.jpg'
import photo5 from '../../assets/mitch5.jpg'
import photo6 from '../../assets/mitch6.jpg'
import photo7 from '../../assets/mitch7.jpg'
import photo8 from '../../assets/mitch8.jpg'
import photo9 from '../../assets/mitch9.jpg'
import photo10 from '../../assets/mitch10.jpg'
import photo11 from '../../assets/mitch11.jpg'
import photo12 from '../../assets/mitch12.jpg'
import Card from '../photo-card/photo-card'

import './gallery.styles.scss'



class Gallery extends React.Component{
    constructor(){
        super()

        this.state = {
            cards :[
            {
                id: 1,
                image: photo1,
                description: 'Meeting your family and hanging out downtown for your wedding was a blast.'
            },
            {
                id: 2,
                image: photo2,
                description: 'I was (am) so proud of your wedding and marriage to Hayley. You guys did it right and I was honored and thrilled to be a part of something so beautiful.'
            },
            {
                id: 3,
                image: photo3,
                description: 'Your bachelor party was perfect. We all had fun, it was the perfect venue, and its memories that I’ll enjoy for the rest of my life.'
            },
            {
                id: 4,
                image: photo4,
                description: 'I’ll forever be thankful to EMU for pairing us up to be roommates for college. I’ll also be forever thankful for your dumb ass never leaving :) even when I annoyed the shit out of you.'
            },
            {
                id: 5,
                image: photo5,
                description: 'It\'s fun telling people we\'re brothers and they believe it because we look we are and be God you are a brother to me.'
            },
            {
                id: 6,
                image: photo6,
                description: 'I loved going on adventures with you and our friends. (I think this was the color run we did) we need to do more cool shit again soon.'
            },
            {
                id: 7,
                image: photo7,
                description: 'yep, most certainly the color run but it looks like we were kicking it at a badass rave... at least thats what I\'ll tell the kids'
            },
            {
                id: 8,
                image: photo8,
                description: 'I do miss our epic nerf gun fights we use to have at the old apartment... even though your shotgun was OP as fuck'
            },
            {
                id: 9,
                image: photo9,
                description: 'I also miss your amazing cooking.... and stealing credit for it whenever I brought a girl over to the apartment lol'
            },
            {
                id: 10,
                image: photo10,
                description: 'WE NEED TO DO OUTDOORS SHIT SOON! I miss kayaking and adventuring (and bitching)'
            },
            {
                id: 11,
                image: photo11,
                description: 'We will also need to plan for more international travel... around the end of March 2023 would be good for me lol'
            },
            {
                id: 12,
                image: photo12,
                description: 'I legit don\'t remember what this was about... but I found it on my phone and love it'
            },
        ]

        }
    }

    render(){
        return(
            <div className='gallery-wrapper'>
                {
                    this.state.cards.map(card =>
                        <Card 
                        key={card.id}
                        image={card.image}
                        description={card.description}
                        />
                        )
                }
            </div>
        )
    }
}

export default Gallery