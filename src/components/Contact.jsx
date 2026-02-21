import {forwardRef} from 'react';
import Footer from './Footer';

const Contact = forwardRef((props, ref) => {
    return(
        <>
        <section ref={ref} id="contact" className="relative min-h-screen w-full bg-blend-overlay flex items-center justify-center overflow-hidden"> 
            <div className="relative z-10 flex min-h-screen items-center justify-center">

            </div>
        </section>
        <Footer />
        </>
    )
});

export default Contact;