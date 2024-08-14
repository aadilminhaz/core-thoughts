import './Welcome.css';

import React, { useEffect, useRef } from 'react';

const Welcome:React.FC = ()=> {

    const h2Ref1 = useRef<HTMLHeadingElement>(null);
    const h2Ref2 = useRef<HTMLHeadingElement>(null);
    const productRef3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === h2Ref1.current) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, 0); // No delay for the first h2
                    } else if (entry.target === h2Ref2.current) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, 500); // Delay for the second h2
                    } else if (entry.target == productRef3.current) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, 1000); //Delay the product logo
                    }
                } else {
                    //To aimate everytime element comes intro the focus
                    // Reset animation by removing the 'animate' class
                   /* if (entry.target === h2Ref1.current) {
                        entry.target.classList.remove('animate');
                    } else if (entry.target === h2Ref2.current) {
                        entry.target.classList.remove('animate');
                    }*/
                }
            });
        });

        if (h2Ref1.current) observer.observe(h2Ref1.current);
        if (h2Ref2.current) observer.observe(h2Ref2.current);
        if (productRef3.current) observer.observe(productRef3.current);

        return () => {
            if (h2Ref1.current) observer.unobserve(h2Ref1.current);
            if (h2Ref2.current) observer.unobserve(h2Ref2.current);
            if (productRef3.current) observer.unobserve(productRef3.current);
        };
    }, []);

    return (
        <div className="welcome">
            <div className="welcome-title">
                
                <p></p>
            </div>
            <div className="welcome-container">
                
                <div className="welcome-format">
                    <h2 ref={h2Ref1}>More Human,</h2>
                    <h2 ref={h2Ref2}>Less AI</h2>
                    <div ref = {productRef3} className='welcome-content'>
                        <p>Introducing</p>
                        <br/>
                        <p><span>Core Thoughts</span></p>
                        <p>Create cool stuff and share the exciting jouney here</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                </div>
            </div>
                
                
         
        </div>
    );
};

export default Welcome;