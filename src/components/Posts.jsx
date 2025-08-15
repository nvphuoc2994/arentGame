import useGetPosts from '@/hooks/useGetPosts';
import { Fragment } from 'react';
import { PostBox } from './PostBox';

export default function Posts() {
    const { data: posts, isFetching, hasNextPage, fetchNextPage } = useGetPosts();
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {posts?.pages.map((postRes, i) => (
                    <Fragment key={i}>
                        {postRes.data.map((post, index) => (
                            <PostBox key={index} {...post} />
                        ))}
                    </Fragment>
                ))}
            </div>
            {hasNextPage && <div className='flex justify-center mt-7'>
                <button disabled={isFetching} className='btn-primary cursor-pointer font-hkgp' onClick={() => fetchNextPage()}>コラムをもっと見る</button>
            </div>}
        </section>
    );
}
