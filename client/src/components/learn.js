import React from 'react';
import LearningTemp from './learnTemplate';
import LoginNavbar from './LoginNavbar';
import learning from './learning';

const Learning = () => {

    return (
        <>
            <LoginNavbar />
            <h1 style={{ color: '#fff', padding: '1rem', marginLeft: '2rem' }}>Learn from the best in the Industry</h1>
            <div className='learning-body'>
                {learning.map((learnItem)=>(
                    <LearningTemp key={learnItem.id} learningData={learnItem} />
                ))}
                
            </div>
        </>
    )
}

export default Learning;