import banner from "../images/image-web-3-desktop.jpg"

export default function Main(props){
    return(
        <div className="main">
            <div className="box box1">
                <img src={banner}></img>
            </div>

            <div className="box box2">
                <h1>New</h1>
                <h2>{props.title1}</h2>
                <p>{props.desc1}</p>
                <br/><hr/>
                <h2>{props.title2}</h2>
                <p>{props.desc2}</p>
                <br/><hr/>
                <h2>{props.title3}</h2>
                <p>{props.desc3}</p>
            </div>

            <div className="box box3">
                <h1>
                    <b>{props.title4}</b>
                </h1>
            </div>

            <div className="box box4">
                <p>{props.desc4}</p>
            <button className="btn">READ MORE</button>
            </div>

        </div>
    )
}