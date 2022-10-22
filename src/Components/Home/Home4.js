import React from 'react';
import './Home.scss';
import glob from '../../assets/glob.jpg';
import girl2 from '../../assets/girl 2.jpg';
import lemonbottle from '../../assets/lemonBottle.jpg';


const Home4 = () => {

    const [moveLeft, setMoveLeft] = React.useState('no');
    const [moveRight, setMoveRight] = React.useState('no');

    const [imageOneVisibility, setImageOneVisibility] = React.useState('visible');
    const [imageTwoVisibility, setImageTwoVisibility] = React.useState('hidden');
    const [imageThreeVisibility, setImageThreeVisibility] = React.useState('hidden');
    
    const [imageOneLeaving, setImageOneLeaving] = React.useState('');
    const [imageOneComing, setImageOneComing] = React.useState('');
    const [imageTwoLeaving, setImageTwoLeaving] = React.useState('');
    const [imageTwoComing, setImageTwoComing] = React.useState('');
    const [imageThreeLeaving, setImageThreeLeaving] = React.useState('');
    const [imageThreeComing, setImageThreeComing] = React.useState('');

    const [newVisibility, setNewVisibility] = React.useState('')

    function handleMoveLeft(){
        if(imageOneVisibility === 'visible'){
            setImageOneLeaving('right')
            setImageThreeComing('right')
            setImageOneVisibility('hidden')
            setImageThreeVisibility('visible')
        }
        if(imageTwoVisibility === 'visible'){
            setImageTwoLeaving('right')
            setImageOneComing('right')
            setImageTwoVisibility('hidden')
            setImageOneVisibility('visible')
        }
        if(imageThreeVisibility === 'visible'){
            setImageThreeLeaving('right')
            setImageTwoComing('right')
            setImageThreeVisibility('hidden')
            setImageTwoVisibility('visible')
        }
    }
    function handleMoveRight(){
        if(imageOneVisibility === 'visible'){
            setImageOneLeaving('left')
            setImageTwoComing('left')
            setImageTwoVisibility('visible')
            setImageOneVisibility('hidden')
            // setNewVisibility('hidden')
            console.log('image one is visible!')
        }
        if(imageTwoVisibility === 'visible'){
            setImageTwoLeaving('left')
            setImageThreeComing('left')
            setImageTwoVisibility('hidden')
            setImageThreeVisibility('visible')
        }
        if(imageThreeVisibility === 'visible'){
            setImageThreeLeaving('left')
            setImageOneComing('left')
            setImageThreeVisibility('hidden')
            setImageOneVisibility('visible')
        }
    }

    return(
        <div className='home-3'>
            <img 
                className={`${imageTwoVisibility} girl-2`} 
                src={girl2}
                moveLeft={moveLeft}
                moveRight={moveRight}
                visibility={imageTwoVisibility}
                leaving={imageTwoLeaving}
                coming={imageTwoComing}
            />
            <img 
                className={`${imageOneVisibility} glob`}  
                src={glob}
                moveLeft={moveLeft}
                moveRight={moveRight}
                visibility={imageOneVisibility}
                leaving={imageOneLeaving}
                coming={imageOneComing}
            />
            <img 
                className={`${imageThreeVisibility} lemon-bottle`} 
                src={lemonbottle}
                moveLeft={moveLeft}
                moveRight={moveRight}
                visibility={imageThreeVisibility}
                leaving={imageThreeLeaving}
                coming={imageThreeComing}
            />
            <h1 className='text-box-3'>Something here that makes you want to click the arrow button.</h1>
            <button 
                className='arrowButtonLeft'
                onClick={() => handleMoveLeft()}
            >➺</button>
            <button 
                className='arrow-button-right'
                onClick={() => handleMoveRight()}
            >➺</button>


        </div>
    )
}
export default Home4;