function ServiceItem(props) {
    return (
        <div class="card col-4">
            <img src={props.imageService} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.nameService}</h5>
                    <p class="card-text">{props.descriptService}</p>
                </div>
        </div>
    )
}

export default ServiceItem;