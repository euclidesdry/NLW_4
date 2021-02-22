export function ExperienceBar () {
    return(
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div className="stripes animated slower" style={{width: '50%'}}/>
                <span className="current-experience" style={{left: '50%'}}>
                    300 xp
                    <span className="ce-percentage">50%</span>
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}