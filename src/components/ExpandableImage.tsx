import {useState} from 'react';
import ReactDOM from 'react-dom';
import "./ExpandableImage.css";

function ExpandableImage({src, alt}: { src: string; alt: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const overlay = (
        <div className={"expandable-image__expanded__overlay"} onClick={toggleExpand}>
            <img src={src} alt={alt} className={"expandable-image__expanded__image"}/>
        </div>
    );

    return (
        <>
            {/* Thumbnail */}
            <img src={src} alt={alt} className={"expandable-image__thumbnail"} onClick={toggleExpand}/>

            {/* Portal for Enlarged Image */}
            {isExpanded && ReactDOM.createPortal(overlay, document.body)}
        </>
    );
}

export default ExpandableImage;
