import { RECOMMENDS } from '@/constants';
import { RecommendBox } from './RecommendBox';

export function Recommends() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {RECOMMENDS.map((recommend, index) => (
                <RecommendBox key={index} {...recommend} />
            ))}
        </div>
    );
}
