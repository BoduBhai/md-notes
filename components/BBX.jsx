import Markdown from "markdown-to-jsx";
import TopNav from "./TopNav";

export default function BBX(props) {
    const md = `#this is header 1 
##this is header 2 

Hello djsfsdkjf

[click here](https://www.google.com)
    `;

    return (
        <section className='bbx-container'>
            <TopNav {...props} />
            <article>
                <Markdown>{md}</Markdown>
            </article>
        </section>
    );
}
