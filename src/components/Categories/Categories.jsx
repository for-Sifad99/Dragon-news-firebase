import { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('../categories.json')
    .then((res) => res.json())
const Categories = () => {
    const categories = use(categoriesPromise);
    // console.log(categories);

    return (
        <>
            <div>
                <h1 className='text-xl text-primary font-semibold mb-2'>All Categories ({categories.length})</h1>
                <div className='grid grid-cols-1 gap-1'>
                    {
                        categories.map(category => (
                            <NavLink
                                to={`/category-news/${category.id}`}
                                key={category.id}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-primary px-6 py-2 font-bold bg-base-200'
                                        : 'text-accent text-bold px-6 py-2 hover:bg-base-200'}
                            >
                                {category.name}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Categories;