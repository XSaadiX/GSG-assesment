
import './App.css';
import "./styles.css";


const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
      skill: "Leadership",
      level: "beginner",
      color: "#FF3B00"
    }
  ];

function App() {
    return(

        <div className="card">
            <Avatar photoDir='personal.png' />
            <div className='data'>
                <Intro myName='Saadi Shamallakh' about='I am a Front-end Developer certificated by META. Iam palestinian , I study at university of East London'/>
                <SkillList/>
            </div>
        </div>
    )
        
}

function Avatar(props){
    return(
        <img src={props.photoDir}  alt="Saadi Personal avatar" className='avatar'></img>
    )
}
function Intro(props){
    return(
        <div>
            <h2>{props.myName}</h2>
            <p>{props.about}</p>
        </div>
    )
}

function SkillList(props){
    return(
        <ul className='skill-list' style={{backgroundColor: props.backgroundColor}}>
           { skills.map((skill)=>(
                <Skill skill={skill.skill}   level={skill.level}
                color={skill.color} key={skills.skill}/>
            ))
            }
        </ul>

    )
}
function Skill({skill,level,color}){
    return(
    <li className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span> <span>{level==='advanced' && '💀'}
        {level==='beginner' && '😀'}
        {level==='intermediate' && '😁'}
        </span>
    </li>
    )
}


export default App;
