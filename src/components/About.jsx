import {forwardRef} from 'react';

const About = forwardRef((props, ref) => {

    return(
        <section ref={ref} id="about" className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
            <div className="relative z-10 flex min-h-screen items-center justify-center">

            </div>
        </section>
    )
});


export default About;