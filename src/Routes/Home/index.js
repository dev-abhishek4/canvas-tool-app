import React from 'react';

import './home.scss';

const Home = () => (
    <React.Fragment>
        <section className="canvas-draw-section">
            <div className="tool-and-canvas-container">
                <div className="tool-list">
                    <div className="tool-row">
                        <button>select</button>
                        <button>select</button>
                    </div>
                </div>
                <canvas id="canvas-id" width="1200" height="600" />
            </div>
            <div className="canvas-element-settings-container">
                <button>clear</button>
            </div>
        </section>
    </React.Fragment>
);

export default Home;