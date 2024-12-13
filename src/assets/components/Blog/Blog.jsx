import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, bookMark }) => {
    const { title, cover, author, author_image, reading_time, posted_date, hashtags } = blog;
    return (
        <div>
            <div>

                <img src={cover} alt="" />
                <div className="flex justify-between">
                    <div className="flex">
                        <img className="h-16 w-16 rounded-full" src={author_image} alt="" />
                        <div>
                            <h1>{author}.</h1>
                            <p> {posted_date}</p>
                        </div>
                    </div>
                    <div>
                        {/* <h1>{reading_time}</h1> */}
                        <button onClick={() => bookMark(blog)}>

                            <FaRegBookmark />
                        </button>

                    </div>
                </div>

                <h2>title: {title}</h2>
                {/* hashtages */}
                <div>
                    {
                        hashtags.map(hash => <span><a href="">{`#${hash}`}</a></span>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;
