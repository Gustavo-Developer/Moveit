import Styles from '../styles/components/Experiencebar.module.css';

export function ExperienceBar(){
    return(
        <header className={Styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}}/>
                <span className={Styles.currentExperience} style={{left: '50%'}}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}