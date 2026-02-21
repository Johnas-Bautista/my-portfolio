import {forwardRef} from 'react';

const Projects = forwardRef((props, ref) => {
    return(
        <section ref={ref} id="projects" className="relative min-h-screen w-full bg-indigo-900 overflow-y-auto flex items-center justify-center overflow-hidden"> 
            <div className="relative z-10 flex min-h-screen items-center justify-center">

            </div>
        </section>
    )
});

export default Projects;