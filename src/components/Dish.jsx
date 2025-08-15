import { Fragment, useState } from 'react'
import clsx from 'clsx';
import useGetDish from '@/hooks/useGetDish';
import { dishFilters } from '@/constants';

export default function Dish() {
    const [filter, setFilter] = useState();
    const { data: dishesResp, isFetching, fetchNextPage, hasNextPage } = useGetDish(filter)
    const handleFilter = (value) => {
        if (filter === value) return setFilter(null);
        setFilter(value)
    }
    return <section className="container">
        <div className='pb-[64px]'>
            <div className="flex flex-wrap gap-4 md:gap-[84px] text-white py-6 justify-center">
                {dishFilters.map(({ title, icon, value }) => (
                    <div key={value} className={clsx(`cursor-pointer`, filter === value && 'drop-shadow-xl')}>
                        <div className={`flex flex-col items-center justify-center w-[116px] h-[134px] bg-gradient-primary polygon`} onClick={() => handleFilter(value)}>
                            <img src={icon} alt="icon" />
                            <span className="text-[20px]">{title}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                {dishesResp?.pages?.map((pageRes, i) => (
                    <Fragment key={i}>
                        {pageRes.data?.map((dish, index) => (
                            <div key={index} className='w-full h-[242px] relative'>
                                <img src={dish.imgSrc} className="w-full h-full object-cover" alt="dish" />
                                <h3 className='text-white text-[15px] absolute bottom-0 left-0 w-[120px] h-8 flex items-center p-2 bg-primary-300'>{dish.date} {dish.type}</h3>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
            {hasNextPage && <div className='flex justify-center mt-7'>
                <button disabled={isFetching} className='btn-primary cursor-pointer font-hkgp' onClick={() => fetchNextPage()}>自分の日記をもっと見る</button>
            </div>}
        </div>
    </section >
}