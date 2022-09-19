

const ProjectList=(props)=>{
   return(<div>
    <h1  data-ns-test="project-name">{props.name}</h1>
    <p data-ns-test="project-description">{props.description}</p>
   </div>)
}
export default ProjectList;