import React from 'react'
import '../style/learn.css'

const LearningTemp = ({learningData}) => {
   
    return (
        <div className="testimonial">
        <div className="testimonial-body">
            <p>
                {learningData.body}
            </p>
            <i className="fas fa-quote-right"></i>
        </div>
        <div className="testimonial-footer">
            <img src={learningData.imgName} alt="user" />
            <h3>{learningData.author}</h3>
            <h4>{learningData.title}</h4>
        </div>
    </div>
    )
}

export default LearningTemp;