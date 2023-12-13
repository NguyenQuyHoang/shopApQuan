function IntroItem(props){
    return(
        <div className="IntroItem col-4">
            <img src={props.image} alt=""></img>
            <button>{props.IntroName}</button>
        </div>
    )
}

export default IntroItem;