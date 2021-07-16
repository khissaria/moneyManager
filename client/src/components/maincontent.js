import React from 'react'
import '../style/main.css'
import money from '../images/money.svg';
import dashboard from '../images/dashboard.svg';
import learn from '../images/learn.svg';

function Main() {
    const handleLogin=()=>{
        window.location='/login';
    }
    return (
        <main >
            <div className="section-fill-leftImg first-project">
                <div className="project-img-container" style={{ opacity: '1', transform: 'none' }} >
                    <div className="project-img">
                        <img src={money} alt='img'></img>
                    </div>
                </div>
                <div className="project-content" style={{ opacity: '1', transform: 'none' }}>
                    <h1>Money Manager</h1>
                    <p>A online platform for you to keep track of your personal finance, we help to keep your financial health stable. Always! </p>
                    <div className="project-btn">
                    <button className="btn" style={{width:'100%'}} onClick={handleLogin}>Sign In</button>
                    </div>
                </div>
            </div>
            <div id="row2" className="section-fill-rightImg others">
                <div className="project-content" style={{ opacity: '1', transform: 'none' }}>
                    <h1>Income - Expense - Invest - Learn</h1>
                    <p>With Money Manager you can monitor your Income, your Expenses and your Money Saving Habits within seconds. We also bring you financial advices from the industry best, to help you Grow. </p>
                    
                </div>
                <div className="project-img-container" style={{ opacity: '1', transform: 'none' }}>
                    <div className="project-img">
                        <img src={learn} alt="dropy-screenshot" />
                    </div>
                </div>
            </div>
            <div className="section-fill-leftImg first-project">
                <div className="project-img-container" style={{ opacity: '1', transform: 'none' }} >
                    <div className="project-img">
                        <img src={dashboard} alt='img'></img>
                    </div>
                </div>
                <div className="project-content" style={{ opacity: '1', transform: 'none' }}>
                    <h1>Dashboard &amp; Reporting</h1>
                    <p>We are working on making your experience better and easier, Dashboards and Monthly Reports coming soon on the platform.</p>
                    
                </div>
            </div>
        </main>
    )
}

export default Main;