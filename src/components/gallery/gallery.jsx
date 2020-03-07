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



class Gallery extends React.Component{
    constructor(){
        super()

        this.state = {
            cards :[
            {
                id: 1,
                image: photo1,
                description: 'test description'
            },
            {
                id: 2,
                image: photo2,
                description: 'test description'
            },
            {
                id: 3,
                image: photo3,
                description: 'test description'
            },
            {
                id: 4,
                image: photo4,
                description: 'test description'
            },
            {
                id: 5,
                image: photo5,
                description: 'test description'
            },
            {
                id: 6,
                image: photo6,
                description: 'test description'
            },
            {
                id: 7,
                image: photo7,
                description: 'test description'
            },
            {
                id: 8,
                image: photo8,
                description: 'test description'
            },
            {
                id: 9,
                image: photo9,
                description: 'test description'
            },
            {
                id: 10,
                image: photo10,
                description: 'test description'
            },
        ]

        }
    }

    render(){
        return(
            <div className='gallery-wrapper'>
                {
                    this.state.cards.map(card =>
                        <div key={card.id}>{card.description}</div>)
                }
            </div>
        )
    }
}

export default Gallery