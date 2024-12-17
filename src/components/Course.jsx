const Header = (props) => {
    return (
        <div>
        <h1>{props.course}</h1>
        </div>
    )
}

const Part = ({details}) => {
    return (
        <div>
        <p>{details.name} {details.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    const partNames = props.parts

    var list = partNames.map(function(part) {
        return <Part details={part}/>
    })

    return (
        <div>{list}</div>
    )
}


const Total = ({parts}) => {
    const total = parts.reduce((s, p) => {
        console.log('what is happening', s, p)
        return s + p.exercises
        }, 0)
        return <div><b>total of {total} exercises.</b></div>
}

const Course = ({course}) => {
    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts = {course.parts} />
        </div>
    )
}

export default Course