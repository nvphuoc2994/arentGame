import { Fragment } from 'react';
import useGetDiary from '@/hooks/useGetDiary';
import DiaryBox from './DiaryBox';
import { RECORDS_ID } from '@/constants';

export default function Diary() {
    const { data: diary, isFetching, hasNextPage, fetchNextPage } = useGetDiary();
    return (
        <section id={RECORDS_ID.diary}>
            <h2 className="text-[22px] mb-1 uppercase">MY DIARY</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {diary?.pages.map((diaryRes, i) => (
                    <Fragment key={i}>
                        {diaryRes.data.map((diary, index) => (
                            <DiaryBox key={index} {...diary} />
                        ))}
                    </Fragment>
                ))}
            </div>
            {hasNextPage && <div className='flex justify-center mt-7'>
                <button disabled={isFetching} className='btn-primary cursor-pointer font-hkgp' onClick={() => fetchNextPage()}>記録をもっと見る</button>
            </div>}
        </section>
    );
}
