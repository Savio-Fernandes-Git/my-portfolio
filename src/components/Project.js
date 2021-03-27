import React from 'react'

export default function Project() {

    return (
        <div>
        <h1 data-aos="fade-right" data-aos-duration="2000" className="projectTitle ml-32 mt-16 text-4xl">Projects</h1>
        <div data-aos="fade-up" data-aos-duration="2000" className="project grid grid-cols-1 md:grid-cols-2 grid-flow-row m-32 mt-14 gap-12">
            <div>
                <h1 className="text-2xl">Pizza Joint using framer motion</h1>
                <p className="mt-4"> A website to apply functionailties of the framer motion API created by framer motion</p>
                <div className="web-code">
                <p className="web-code-text p-2">View Website</p>
                <p className="web-code-text p-2">View Code</p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl">Firegram image gallery using firebase</h1>
                <p className="mt-4"> A website using firebase firestore backend to upload and view images in a gallery view</p>
                <div className="web-code">
                <p className="web-code-text p-2">View Website</p>
                <p className="web-code-text p-2">View Code</p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl">Expense Tracker</h1>
                <p className="mt-4"> A web app to track your expenses using context API state management</p>
                <div className="web-code">
                <p className="web-code-text p-2">View Website</p>
                <p className="web-code-text p-2">View Code</p>
                </div>
            </div>
        </div>
        </div>
    )
}
