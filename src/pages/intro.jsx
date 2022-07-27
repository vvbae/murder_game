import React, { useEffect, useState } from 'react';
import bus_schema from '../schemas/buston_schema.png';
import oyc_schema from '../schemas/oyc_schema.png';
import Collapse from '../components/collapse';
import bell from "../sounds/bell.wav";
import call from "../sounds/call.wav";
import "../styles/intro.css";

export default function Intro() {

    const [murderer, setMurderer] = useState("");
    const [showWrong, setShowWrong] = useState(false);
    const [startCh2, setStartCh2] = useState(false);
    const [startCh3, setStartCh3] = useState(false);
    const [showWrong2, setShowWrong2] = useState(false);
    const chime = new Audio(bell);
    const phone = new Audio(call);
    chime.loop = false;
    phone.loop = false;

    const starter =  
    <div className='starter'>
        <br />
        <p>Nov 11, 2009</p>
        <h2>Hello Detective Q,</h2>
        <br />

        <p>Welcome to your first day at Buston Police Office.
            We are glad that you chose to join us here at Buston Police Office.
            You will be of great help to our department.</p>

        <br />

        <p>As you have heard, there has been a Murder in Buston two days ago.
            According to our analysis of the crime scene reports, it seems to be
            a case following a previous murder happened at Old York City. We 
            suspect that the offensers are the same person.</p>

        <br />

        <p>We have completed the necessary groundworks for you, and we decided 
            to make you the head of the investigation committee for this case.
            Since you are not able to come to Buston in person,
            we have prepared all the documents you need in a database for you.</p>

        <br />

        <h2>New to SQL</h2>
        <p> If you are new to SQL, you could choose to either try the walkthrough.
            Or if you want to learn more about SQL, you could follow a complete
            starter tutorial like <a href="https://selectstarsql.com/" rel="noreferrer">
    Select Star SQL</a>.</p>

        <br />

        <h2>Experienced SQL detectives</h2>
        <p> If you are already comfortable with SQL, you can get started!</p>
        <br />
        <p> <b>Hint: </b> start by finding the crime scene report in <b>bus_crime_scene_reports</b>!</p>
        
    </div>;

    const bus_schema_diagram = <img 
        src={bus_schema}
        alt="buston_schema" />;

    const checker = <form onSubmit={handleSubmit}>
        <label for="name">Murderer (type their full name): </label>
        <input type="text" name="name" value={murderer} onChange={(e) => setMurderer(e.target.value)}/>
        <input type="submit" value="Submit" />
    </form>;

    const wrongAns = <div className='ans'>
        <p>Sorry, but the answer is wrong.</p>
        <p>Stuck? Check out the walkthrough!</p>
    </div>;

    const ch2 = <div className="starter">
        <br />
        <p>Thanks Detective Q, you identified the suspect for us.</p>
        <p>
            We are working to obtain a warrant and continue with the 
            investigation. In the meantime, we have sent you the documents 
            for the case happened a year ago in OYC, including a news report included below. 
        </p>

        <p>We hope you could find the fatal evidence on the case.</p>
        <p>Good luck.</p>

        <br />
        <h2>Man dead, his boyfriend charged with 1st degree murder: police</h2>
        <p>Sept 29, 2008</p>
        <p style={{fontStyle:"italic"}}>By Naxos M. at Old York Times</p>
        <p>OYC police say a man has been charged with murder after a man was found dead 
            in a park yesterday. The body was found by a lady walking her dog at 6am.</p>
        <p>A 25-year-old man was found dead, police say.</p>
        <p>A 26-year-old OYC man has been arrested and charged with first-degree murder.
            The man was allegedly the deads boyfriend.
        </p>
        <p>Police say he is held in custody and waiting for a bail hearing.</p>
        <p>Anyone with information is asked to contact Constable Chilaquiles Brophy
             at 987-654-3210.</p>
        <br />
    </div>;

    const credits = <div className="credits">
        <br />
        <h2>Credits</h2>
        <br />
        <p>The Mystery of Left-hand Slayer was created by <a href="https://www.linkedin.com/in/vivi-wei-499925161/" rel="noreferrer">Vivi Wei</a>. 
        See the <a href="https://github.com/vvbae/murder_game.git" rel="noreferrer">GitHub repository</a>
         for more information.</p>
        
        <p>This mystery was inspired by <a href="https://mystery.knightlab.com/" rel="noreferrer"> The SQL Murder Mystery</a>
        .</p>
    </div>

    const oyc_schema_diagram = <img 
        src={oyc_schema}
        alt="OYC_schema" />;

    useEffect(() => {
        chime.play();
    }, [startCh2]);

    useEffect(() => {
        phone.play();
    }, [startCh3]);

    function handleSubmit(e) {
        e.preventDefault();

        if (startCh2) {
            if (murderer.trim().toLowerCase() !== "jerry burridos") {
                setShowWrong2(true);
            } else {
                setShowWrong2(false);
                setStartCh3(true);
            }
        } else {
            if (murderer.trim().toLowerCase() !== "michael takos") {
                setShowWrong(true);
            } else {
                setShowWrong(false);
                setStartCh2(true);
            }
        }
    }

    return (
        <div className="sidebar">
            <Collapse 
                title="Chapter 1"
                item_to_display={starter}
            />

            <Collapse 
                title="Bus Schema Diagram"
                item_to_display={bus_schema_diagram}
            />

            <Collapse 
                title="Chapter 1 Checker"
                item_to_display={checker}
            />

            {showWrong ? wrongAns : <></>}

            {
                startCh2 ? 
                <Collapse 
                    title="Chapter 2"
                    item_to_display={ch2}
                /> : <></>
            }

            {
                startCh2 ? 
                <Collapse 
                    title="OYC Schema Diagram"
                    item_to_display={oyc_schema_diagram}
                /> : <></>
            }

            {
                startCh2 ? 
                <Collapse 
                    title="Chapter 2 Checker"
                    item_to_display={checker}
                /> : <></>
            }

            {showWrong2 ? wrongAns : <></>}

            {startCh3 ? credits : <></>}
        </div>
    );
}