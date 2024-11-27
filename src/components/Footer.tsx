import "./Footer.css";

export const Footer = () => {
    return (
        <div className={"page-footer"}>
            <a href={"https://www.twitch.tv/barbietheninja"} target={"_blank"}>
                <img className={"twitch-logo"} src="/advent-calendar/media/twitch.svg" alt={"twitch"}/>
            </a>
            <a href={"https://www.instagram.com/barbietheninjaog/"} target={"_blank"}>
                <img className={"instagram-logo"} src="/advent-calendar/media/instagram.svg" alt={"instagram"}/>
            </a>
            <a href={"https://www.youtube.com/@barbietheninja"} target={"_blank"}>
                <img className={"youtube-logo"} src="/advent-calendar/media/youtube.svg" alt={"youtube"}/>
            </a>
            <a href={"https://www.tiktok.com/@barbietheninja"} target={"_blank"}>
                <img className={"tiktok-logo"} src="/advent-calendar/media/tiktok.svg" alt={"youtube"}/>
            </a>
        </div>
    )
}