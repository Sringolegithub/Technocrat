import React from "react";
import { Link } from "react-router-dom";

const ThoughtCenter = () => {

    return (

        <>
            <div className="header">
        <div className="container-3">
            <h1>WE MAKE IT HAPPEN</h1>
        </div>
    </div>
            <div className="main-contain">
                {/* <!-- -----------row-5---------- --> */}
                <div className="row-5">
                    <h1 className="sub-title"><i className="fa fa-hand-o-right" width="20px"></i> Thought center</h1>
                    <div className="though-center">
                        <div>
                            <i className="fa fa-newspaper-o"></i>
                            <h2>NEWS</h2>
                            <p> The news, the views, the updates, the press releases, the media coverage, everything.
                                Find
                                out
                                what’s happening at Technocrat.
                                lot of things during the process. A few of those things are the
                                current trends,the design norms and foremostly, the target
                                audience behavior.
                            </p>
                            <Link to="#">View All</Link>
                        </div>
                        <div>
                            <i className="fa fa-file-text"></i>
                            <h2>RESOURCES</h2>
                            <p>The blogs, the case studies, the
                                whitepapers. Find all the articles and
                                infographics.
                            </p>
                            <Link to="#">View All</Link>
                        </div>
                        <div>
                            <i className="fa fa-line-chart"></i>
                            <h2>REPORTS</h2>
                            <p>The news, the views, the updates, the press releases, the media coverage, everything.
                                Find out what’s happening at Technocrat.</p>
                            <Link to="#">View All</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ThoughtCenter;