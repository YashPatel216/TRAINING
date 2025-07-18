import React, { Suspense, lazy } from 'react';
const Home = lazy(() => import('./Home.jsx'));
const About =lazy(()=> import('./About.jsx'));
class LazyDisplay extends React.Component {
    render()
    {
        return(
            <div>
                <h1>Lazy Loading Example</h1>
                <Suspense fallback={<div>Please wait some time...Home Page is Loading</div>}>
                <Home />
                </Suspense>
                <Suspense fallback ={<div>Please wait some time... About Page is loading</div>}>
                <About />
                </Suspense>
            </div>
        )
    }
}
export default LazyDisplay;