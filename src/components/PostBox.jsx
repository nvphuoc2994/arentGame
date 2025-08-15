import { Link } from 'react-router-dom';

export function PostBox({ title, link, imgSrc, time, tags }) {
    return (
        <div>
            <Link to={link} className="relative mb-2">
                <img className='h-[144px] w-full object-cover' src={imgSrc} alt={title} />
                <time
                    className="absolute bottom-0 left-0 bg-primary-300 text-white inline-flex items-center justify-center h-6 w-36 text-[15px]"
                >
                    {time}
                </time>
            </Link>
            <h2 className="text-[15px] line-clamp-2 mt-2 font-hkgp font-light">
                {title}
            </h2>
            <p className="flex items-center flex-wrap gap-2 h-6">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-primary-400 text-xs font-hkgp font-light"
                    >
                        {tag}
                    </span>
                ))}
            </p>
        </div>
    );
}
