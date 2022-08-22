const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
)
function Header() {
    return (
        <div className="header">
            <p>
                <i className="fa-solid fa-earth-europe"></i> {`   `}
                <span className="header-heading">My Travel Journal</span>
            </p>
        </div>
    )
}
function Main() {
    let elements = data.map((elem)=>{
            return (
                <Section 
                src = {elem.src}
                locationName = {elem.locationName}
                locationLink={elem.locationLink}
                title={elem.title}
                date={elem.date}
                blog={elem.blog} 
                 />
            )
    })
    return (
        <div className="main">
            {elements}
        </div>
    )
}
function Section(props) {
    return (
        <div className="section">
            <div className="img-box">
                <img src={props.src} alt="" />
            </div>
            <div className="data-box">
                <div className="data">
                    <p className='location-data'>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className='location-name'>{props.locationName}</span>
                        <a className='location-link' href={props.locationLink}>View on Google Maps </a>
                    </p>
                    <h2 className='section-hading'>{props.title}</h2>
                    <hr />
                    <p className='traveling-date'> {props.date}</p>
                    <p className='content'>{props.blog}</p>
                    
                </div>
            </div>
        </div>
    )
}

function Footer()
{
    return(
        <div className="footer">
        <small>© All right Reserved ©</small>
    </div>
    )
}

var data=[
    {
        src:"https://images.pexels.com/photos/13211472/pexels-photo-13211472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                locationName:"New-York",
                locationLink:"https://www.google.com/maps/@40.7137119,-74.2079245,10.5z",
                title:"Empire State ebulding",
                date:"12 Jan,2021 -24 jan,2021",
                blog:`vero earum qui. Vero numquam pariatur dolorem velit deleniti accusamus, 
                perspiciatis sint, aliquam iusto at, impedit asperiores nam ab sapiente commodi. 
                Est corrupti facilis perspiciatis aut debitis dolore sapiente, accusantium 
                dignissimos soluta, mollitia, ea voluptas non veritatis id? Quo cumque corrupti rerum 
                accusantium consequuntur obcaecati modi molestiae mollitia, id nam eos? `

    },
    {
        src:"https://images.pexels.com/photos/13211472/pexels-photo-13211472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                locationName:"New-York",
                locationLink:"https://www.google.com/maps/@40.7137119,-74.2079245,10.5z",
                title:"Empire State ebulding",
                date:"12 Jan,2021 -24 jan,2021",
                blog:`vero earum qui. Vero numquam pariatur dolorem velit deleniti accusamus, 
                perspiciatis sint, aliquam iusto at, impedit asperiores nam ab sapiente commodi. 
                Est corrupti facilis perspiciatis aut debitis dolore sapiente, accusantium 
                dignissimos soluta, mollitia, ea voluptas non veritatis id? Quo cumque corrupti rerum 
                accusantium consequuntur obcaecati modi molestiae mollitia, id nam eos? `

    },
    {
        src:"https://images.pexels.com/photos/13211472/pexels-photo-13211472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                locationName:"New-York",
                locationLink:"https://www.google.com/maps/@40.7137119,-74.2079245,10.5z",
                title:"Empire State ebulding",
                date:"12 Jan,2021 -24 jan,2021",
                blog:`vero earum qui. Vero numquam pariatur dolorem velit deleniti accusamus, 
                perspiciatis sint, aliquam iusto at, impedit asperiores nam ab sapiente commodi. 
                Est corrupti facilis perspiciatis aut debitis dolore sapiente, accusantium 
                dignissimos soluta, mollitia, ea voluptas non veritatis id? Quo cumque corrupti rerum 
                accusantium consequuntur obcaecati modi molestiae mollitia, id nam eos? `

    }
]