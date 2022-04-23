const Card = (props) => {
    return (
        <article className="card">
            <img src={props.details.imageUrl} className="card--image" />
            <div className="card--content">
                <p className="card--meta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path fill="#BEE5B0" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span className="card--country">{props.details.location.toUpperCase()}</span>
                    <a className="card--link-google" href={props.details.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </p>
                <h2 className="card--title">{props.details.title}</h2>
                <h4 className="card--dates">{props.details.startDate} - {props.details.endDate}</h4>
                <p className="card--text">{props.details.description}</p>
            </div>
        </article>
    )
}

export default Card