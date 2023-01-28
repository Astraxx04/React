function Event() {
    const clickHandler = () => console.log("The button was clicked")
    return(
        <button onClick={clickHandler}>Click Me</button>
    );
}

export default Event;