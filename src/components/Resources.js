import React from 'react';
import "./css/Resources.css";

/*********** LIST TEMPLATE ************/
/* 
<h2 className="list-title"></h2>
    <ul className="list-body">
        <li className="list-item"><a href=""></a> - </li>
        <li className="list-item"><a href=""></a> - </li>
        <li className="list-item"><a href=""></a> - </li>
    </ul>
*/

export default class Resources extends React.Component {
    render() {
        return (
            // eslint-disable-next-line
            <div>
                <div className="banner"></div>
                <div className="resources text">

                    <h1 className="title">Online Resources</h1>
                    <div className="pg-desc">
                        <p className="quote"><em>"Teaching is not a lost art, but the regard for it is a lost tradition."</em> — Jacques Barzun</p>

                        <p>The following are links to some useful online resources. Although I have listed most under specific B.C. curriculum courses, they can be used across level and geography. Please inform me if a link is broken or if I am missing a great resource. My deepest gratitude to the dedicated educators who created these resources.</p>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Early Literacy</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="https://www.starfall.com/h/">Starfall</a> - Website</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Social Studies 9</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="https://www.youtube.com/watch?v=8gC00avITj0">Horrible Histories: Napoleon Bonaparte</a> - Video</li>
                            <li className="list-item"><a href="https://www.history.com/topics/france/napoleon#napoleon">The History Channel: Napoleon Animation</a> - Video</li>
                            <li className="list-item"><a href="http://www.educationscotland.gov.uk/scotlandshistory/jacobitesenlightenmentclearances/clearances/index.asp">The Highland Clearances</a> - Website [Deprecated Link]</li>
                            <li className="list-item"><a href="slideshare.net/tbonnar/the-french-revolution-part-1">The French Revolution Part 1</a> - PowerPoint</li>
                            <li className="list-item"><a href="https://www.slideshare.net/tbonnar/the-french-revolution-part-2">The French Revolution Part 2</a> - PowerPoint</li>
                            <li className="list-item"><a href="https://www.slideserve.com/zody/women-in-the-industrial-revolution">Women in the Industrial Revolution</a> - PowerPoint</li>
                            <li className="list-item"><a href="https://www.youtube.com/watch?v=zF_U4VGl1Jk">Horrible Histories: Children in the Industrial Revolution</a> - Video</li>
                            <li className="list-item"><a href="http://www.bbc.co.uk/schools/410.shtml">Potato Famine, Highland Clearances, and Emigration</a> - Website [Deprecated Link]</li>
                            <li className="list-item"><a href="http://www.canadiana.ca/hbc/intro_e.html">The Fur Trade and The Hudson’s Bay Company</a> - Website [Deprecated Link]</li>
                            <li className="list-item"><a href="http://www.firstpeoplesofcanada.com/">Canada’s First Peoples</a> - Website</li>
                            <li className="list-item"><a href="http://www.canadiangeographic.com/atlas/themes.aspx?id=atlantic&sub=atlantic_basics_regions#">The Regions of Canada</a> - Website</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Science 9</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="https://www.khanacademy.org/science/high-school-biology/hs-biology-foundations/hs-biological-macromolecules/v/elements-and-atoms">Introduction to the Atom</a> - Khan Academy Website</li>
                            <li className="list-item"><a href="https://www.khanacademy.org/science/chemistry/periodic-table-trends-bonding/v/groups-of-the-periodic-table">Groups of the Periodic Table</a> - Khan Academy Website</li>
                            <li className="list-item"><a href="https://www.khanacademy.org/science/chemistry/periodic-table-trends-bonding/v/ionic--covalent--and-metallic-bonds">Bonding</a> - Khan Academy Website</li>
                            <li className="list-item"><a href="https://www.khanacademy.org/science/biology/cell-division/v/parts-of-a-cell">Parts of the Cell</a> - Khan Academy Website</li>
                            <li className="list-item"><a href="https://www.khanacademy.org/science/biology/cell-division/v/chromosomes--chromatids--chromatin--etc">D.N.A. Vocab</a> - Khan Academy Website</li>
                            <li className="list-item"><a href="https://www.khanacademy.org/science/biology/cell-division/v/mitosis--meiosis-and-sexual-reproduction">Mitosis and Meiosis</a> - Khan Academy Website</li>
                            <li className="list-item"><a href="http://www.youtube.com/watch?v=D1_-mQS_FZ0">Meiosis</a> - Video</li>
                            <li className="list-item"><a href="http://www.cellsalive.com/meiosis.htm">Meiosis!</a> - Interactive Model</li>
                            <li className="list-item"><a href="http://www.youtube.com/watch?v=sJCWVTnFf5o&feature=related">Meiosis vs. Mitosis</a> - Video 1</li>
                            <li className="list-item"><a href="http://www.youtube.com/watch?v=Ba9LXKH2ztU&feature=related">Meiosis vs. Mitosis</a> - Video 2</li>
                            <li className="list-item"><a href="http://chss.sd57.bc.ca/~spearce/Links%20from%20index/Practice_Tests.html">Science 9 Practice Tests</a> - Website</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Foundations & Precalculus 10</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="https://www.sd43.bc.ca/RESOURCES/PARENTRESOURCES/MATH/10/Pages/default.aspx">Worksheets, Videos, and Practice Tests</a> - The entire course from the Coquitlam district</li>
                            <li className="list-item"><a href="http://riversidedella.wikispaces.com/file/view/online%20resources%20for%20studying%20for%20provincial%202013.pdf/396070852/online%20resources%20for%20studying%20for%20provincial%202013.pdf">Lessons and Quizzes</a> - Coquitlam district. Lessons on the left, quizzes on the right</li>
                            <li className="list-item"><a href="http://www.math10.ca/index.php">The Entire Course Explained</a> - The Unofficial Guide by Mr. Mabillard.</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Science 10</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://www.borealbirds.org/resources/factsheet-IBCC-globalwarming.pdf">Canada’s Boreal Forest</a> - Fact Sheet</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/atomic-number-and-mass-number.html">Atomic Number and Mass</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/the-periodic-table-properties-of-groups-and-periods.html">The Periodic Table</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/understanding-ions-and-drawing-lewis-structures.html">Octet Rule and Lewis Structures</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/ions-predicting-formation-charge-and-formulas-of-ions.html">Ions</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/lewis-structures-single-double-triple-bonds.html">Lewis Diagrams</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/naming-ionic-compounds-simple-binary-transition-metal-polyatomic-ion-compounds.html">Naming Ionic Compounds</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/writing-ionic-compound-formulas-binary-polyatomic-compounds.html">Writing Formulas for Ionic Compounds</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/covalent-compounds-properties-naming-formation.html">Naming Covalent Compounds</a> - Education Portal</li>
                            <li className="list-item"><a href="http://education-portal.com/academy/lesson/chemical-reactions-and-balancing-chemical-equations.html">Balancing Chemical Equations</a> - Education Portal</li>
                            <li className="list-item"><a href="http://www.sciencegeek.net/Chemistry/taters/EquationBalancing.htm">Balancing Chemical Equations</a> - Practice Online Quiz</li>
                            <li className="list-item"><a href="http://funbasedlearning.com/chemistry/chemBalancer/ques1.htm">Balancing Chemical Equations</a> - Practice Questions</li>
                            <li className="list-item"><a href="http://www.geo.mtu.edu/UPSeis/waves.html">Types of Seismic Waves</a> - Includes diagrams</li>
                            <li className="list-item"><a href="http://www.sciencelearn.org.nz/Contexts/Earthquakes/Science-Ideas-and-Concepts/Seismic-waves">Types of Seismic Waves</a> - Check out the interactive links at the bottom of the page</li>
                            <li className="list-item"><a href="http://earthguide.ucsd.edu/mystery_detectives/media/flash/lagtime/lagtime.swf">Interactive S-P Lag Time Graph</a> - </li>
                            <li className="list-item"><a href="https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-time/v/introduction-to-vectors-and-scalars">Displacement Velocity and Time</a> - Khan Academy</li>
                            <li className="list-item"><a href="http://phet.colorado.edu/en/simulation/moving-man">The Moving Man</a> - Interactive simulation showing the relationship between speed, velocity, and acceleration</li>
                            <li className="list-item"><a href="http://library.thinkquest.org/C0110840/postimegr.htm">Position-Time vs. Distance-Time Graphs</a> - The website provides an overview of the basics of motion</li>
                            <li className="list-item"><a href="http://interactagram.com/physics/kinamatics/positionVelocityAcceleration/speedVsVelocity/index.php">Interactive Velocity vs. Speed Graph</a> - Explore the website for more interactive physics tools</li>
                            <li className="list-item"><a href="http://www.youtube.com/watch?v=MfDv4FMDlpI">Motion Definitions and Concepts</a> - Video</li>
                            <li className="list-item"><a href="http://www.sardissecondary.ca/science-10">Science 10 Course Online by Mrs. Moore</a> - </li>
                            <li className="list-item"><a href="http://www.physicsclassNameroom.com/Physics-Tutorial/1-D-Kinematics">Interactive Physics classNameroom</a> - All topics covered in your Grade 10 course</li>
                            <li className="list-item"><a href="http://sss.sd33.bc.ca/sites/default/files/Unit%201%20-%20Exam%20Study%20Guide.pdf">Provincial Exam Study Guide Unit 1: Ecology</a> - </li>
                            <li className="list-item"><a href="http://sss.sd33.bc.ca/sites/default/files/Unit%202%20-%20Exam%20Study%20Guide.pdf">Provincial Exam Study Guide Unit 2: Chemistry</a> - </li>
                            <li className="list-item"><a href="http://sss.sd33.bc.ca/sites/default/files/Unit%203%20-%20Exam%20Studay%20Guide.pdf">Provincial Exam Study Guide Unit 3: Motion</a> - </li>
                            <li className="list-item"><a href="http://sss.sd33.bc.ca/sites/default/files/Unit%204%20-%20Exam%20Study%20Guide.pdf">Provincial Exam Study Guide Unit 4: Earth Science</a> - </li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Social Studies 10</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://news.google.com/newspapers?nid=2194&dat=19270628&id=N_AuAAAAIBAJ&sjid=qtkFAAAAIBAJ&pg=7132,4524698">Women in the 19th Century</a> - The Ottawa Citizen, June 28, 1927</li>
                            <li className="list-item"><a href="http://www.thecanadianencyclopedia.com/articles/womens-suffrage">Women’s Suffrage</a> - The Canadian Encyclopedia</li>
                            <li className="list-item"><a href="http://www.thecanadianencyclopedia.com/articles/status-of-women">History of the Status of Women in Canada</a> - The Canadian Encyclopedia</li>
                            <li className="list-item"><a href="http://www.canadiangeographic.ca/atlas/themes.aspx?id=atlantic&sub=atlantic_basics_regions#">The Regions of Canada</a> - Explore the rest of the website</li>
                            <li className="list-item"><a href="http://www.sabresocials.com/norm/Social%20Studies%2010/">The Entire Course Online</a> - Powerpoints, the textbook, review questions</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Precalculus 11</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://faculty.uoit.ca/kay/precalc/">Precalculus Course</a> - Explore the blue menu on the left. The P.D.F. files are easier than the mini clips.</li>
                            <li className="list-item"><a href="https://www.khanacademy.org/math/trigonometry/basic-trigonometry/trig_graphs_tutorial/v/we-graph--domain--and-range-of-sine-function">Graphs of Trigonometric Functions</a> - Khan Academy</li>
                            <li className="list-item"><a href="http://www.onlinemathlearning.com/trigonometric-graphs.html">Transformations of Trigonometric Functions</a> - Online Math Learning</li>
                            <li className="list-item"><a href="http://www.purplemath.com/modules/grphtrig.htm">Graphing Trigonometric Functions</a> - Tutorial</li>
                            <li className="list-item"><a href="http://www.scribd.com/doc/14170008/Grade-11-Functions-EXAM-REVIEW">Grade 11 Functions Final Review</a> - (Ontario) A succinct reference of basic rules and skills</li>
                            <li className="list-item"><a href="http://www.fhs.d211.org/departments/math/sdenna/A_NewSite/M118/Unit4/Unit4_Test_Rev_WS.pdf">Rational Expressions Worksheet</a> - Final test review</li>
                            <li className="list-item"><a href="http://www.wtamu.edu/academic/anns/mps/math/mathlab/col_algebra/col_alg_tut7_factor.htm">Factoring Polynomials</a> - Tutorial</li>
                            <li className="list-item"><a href="http://seattlecentral.edu/faculty/alevy/Box_%20Method.pdf">The Box Method for Factoring a Polynomial</a> - </li>
                            <li className="list-item"><a href="http://www.touchmathematics.org/topics/trigonometry">Interactive Trigonometry</a> - Explore trigonometric ratios and functions</li>
                            <li className="list-item"><a href="http://sd67.bc.ca/teachers/dmillar/Math%2011/Tri%20Trig%20Practice%20Test.pdf">Trigonometry Practice Test</a> - Answer key included</li>

                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Social Studies 11</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://www.bced.gov.bc.ca/exams/search/grade11/english/sample/exam/1112ss_p.pdf">Sample Provincial Exam</a> - </li>
                            <li className="list-item"><a href="http://www.bced.gov.bc.ca/exams/search/grade11/english/sample/key/1112ss_pk.pdf">Sample Provincial Exam Answers</a> - </li>
                            <li className="list-item"><a href="http://www.members.shaw.ca/ss11exam/Counterpoints.htm">Notes from Counterpoints Textbook</a> - Study guide for the exam</li>
                            <li className="list-item"><a href="http://pgss.sd57.bc.ca/~vkilbey/Socials/ss/ss11examreview.htm">Provincial Exam Review</a> - Quizzes and how to interpret cartoons</li>
                            <li className="list-item"><a href="http://hamphighhistory.files.wordpress.com/2012/08/mapanalysiswwi.pdf">Map Analysis: Europe Before and After W.W.I.</a> - Worksheet</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Precalculus 12</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://www.math30.ca/index.php">The Entire Course Explained</a> - The Unofficial Guide by Mr. Mabillard</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">S.A.T. Math</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="https://www.khanacademy.org/test-prep/sat/sat-math-practice">S.A.T. Math</a> - Khan Academy</li>
                            <li className="list-item"><a href="http://professionals.collegeboard.com/profdownload/sat-mathematics-review.pdf">S.A.T. Math Formula Sheet</a> - </li>
                            <li className="list-item"><a href="http://sat.collegeboard.org/practice/sat-practice-questions-math/math-concepts">S.A.T. Math Practice Questions</a> - </li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">University/College</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="https://www.khanacademy.org/math/test-prep/sat-math/v/sat-prep--test-1-section3-part-1">The OWL @ Purdue Purdue University’s Online Writing Lab</a> - M.L.A. & A.P.A. Guides</li>
                            <li className="list-item"><a href="http://www.youth2youth.ca/en/faq">F.A.Q.'s</a> - Youth 2 Youth</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Math – Various Levels</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://funbasedlearning.com/">Fun Based Learning</a> - Algebra and chemistry games at the middle and secondary levels</li>
                            <li className="list-item"><a href="http://www.onlinemathlearning.com/">OnlineMathLearning</a> - Teach and learn math</li>
                            <li className="list-item"><a href="http://www.thssmath.com/">Math Quizzes</a> - Grades 8-12. From Thomas Haney S.S. in Maple Ridge</li>
                            <li className="list-item"><a href="http://cemc2.math.uwaterloo.ca/wired_math/">Wired Math</a> - Games, lessons, exercises and more for Grades 7-10</li>
                            <li className="list-item"><a href="http://chss.sd57.bc.ca/~spearce/Links%20from%20index/Practice_Tests.html">Practice Tests</a> - Math 8 & 9</li>
                            <li className="list-item"><a href="http://nrich.maths.org/frontpage">Math Enrichment Activities</a> - University of Cambridge</li>
                            <li className="list-item"><a href="https://www.desmos.com/">Online Graphing Calculator</a> - Free & Awesome</li>
                            <li className="list-item"><a href="http://www.mathsisfun.com/">Math is Fun</a> - Because math IS fun</li>
                            <li className="list-item"><a href="http://www.shodor.org/interactivate/activities/Regression/">Line of Best Fit Interactive</a> - Regression analysis and line of best fit</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Science – Various Levels</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://bio-alive.com/animations/cell-biology.htm">Cell Biology</a> - Interactive animations of different topics in cell biology, all levels</li>
                            <li className="list-item"><a href="http://misterguch.brinkster.net/etestbook.pdf">The Complete Book of Chemistry Quizzes Volume 1</a> - High school</li>
                            <li className="list-item"><a href="http://chss.sd57.bc.ca/~spearce/Links%20from%20index/Practice_Tests.html">Practice Tests</a> - Science 8 & 9</li>
                            <li className="list-item"><a href="http://www.g2conline.org/">Genes to Cognition</a> - Check out “Targeted Content: 3D Brain.”</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Geology/Geography – Various Levels</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://www.bbc.co.uk/bitesize/ks3/science/environment_earth_universe/rock_cycle/revision/1/">The Rock Cycle</a> - From B.B.C. Bitesize</li>
                            <li className="list-item"><a href="http://www.learner.org/interactives/rockcycle/index.html">The Rock Cycle Interactive</a> - From Annenberg Learner</li>
                            <li className="list-item"><a href="http://geology.com/">Geology.com</a> - Everything geology</li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Language Arts – Various Levels</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://www.poets.org/">Poets.org</a> - Poems, biographies, study guides and teacher lesson plans</li>
                            <li className="list-item"><a href="http://www.readwritethink.org/files/resources/interactives/essaymap/">Interactive Essay Map</a> - Build and print your own essay concept map</li>

                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Canadiana</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="http://www.canadiangeographic.ca/atlas/intro.aspx?lang=En">The Canadian Atlas Online</a> - Explore Canadian geography</li>
                            <li className="list-item"><a href="https://www.youtube.com/watch?v=_4Mw93H2b7A">Canada: A People’s History The full C.B.C. documentary</a> - YouTube</li>
                            <li className="list-item"><a href="http://www.thecanadianencyclopedia.com/en/">The Canadian Encyclopedia</a> - THE Source for all things Canadian</li>
                            <li className="list-item"><a href="http://www.thecanadianencyclopedia.ca/en/timelines/100-great-events-in-canadian-history/">100 Greatest Events in Canadian History</a> - A great timeline</li>
                            <li className="list-item"><a href="http://wherearethechildren.ca/">WhereAreTheChildren?</a> - An interactive project to address the long-term implications of the residential school system</li>
                            <li className="list-item"><a href="http://www.bced.gov.bc.ca/exams/search/welcome.php">B.C. Sample Provincial Exams</a> - </li>
                        </ul>
                    </div>

                    <div className="list">
                        <h2 className="list-title">Other Learning Resources</h2>
                        <ul className="list-body">
                            <li className="list-item"><a href="https://www.khanacademy.org/">Khan Academy</a> - The pioneer of online learning. You don’t have to sign in to start learning, just click on “Learn”</li>
                            <li className="list-item"><a href="http://mashable.com/2011/11/24/google-search-infographic/">Google Search Infographic</a> - Make your web searches more effective with these advanced search options</li>
                            <li className="list-item"><a href="http://www.physicsclassNameroom.com/">The Physics classNameroom</a> - Great for interactive resources and clear explanations</li>
                            <li className="list-item"><a href="http://demonstrations.wolfram.com/download-cdf-player.html">Wolfram Demonstrations Project</a> - This website provides more than a thousand interactive demonstrations of concepts in science, math, technology, even art. You need to download the C.D.F. player, which is available for free on the website.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}