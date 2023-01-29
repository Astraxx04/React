import GrandChild from "./GrandChild";

function Child(props) {
    return(
        <div>
            <h1>Hello I'm {props.name} and I am {props.age} years old.</h1><GrandChild game="Football"/>
        </div>
    );
}

export default Child;