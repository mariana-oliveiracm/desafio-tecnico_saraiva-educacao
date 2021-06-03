import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
  
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
} from "react-share";

export default function Share(){

    const
        url = String(window.location),
        message = "Venha conhecer esse site! O Bebidas SA é muito legal",
        size = "4.5vh"

    return(
        <div>
            <FacebookShareButton url={url} quote={message}>
                <FacebookIcon size={size}>
                </FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url={url} title={message}>
                <TwitterIcon size={size}>
                </TwitterIcon>
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={message}>
                <WhatsappIcon size={size}>
                </WhatsappIcon>
            </WhatsappShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={size}>
                </LinkedinIcon>
            </LinkedinShareButton>
            <EmailShareButton url={url} body={message}>
                <EmailIcon size={size}>
                </EmailIcon>
            </EmailShareButton>
        </div>
    );
}