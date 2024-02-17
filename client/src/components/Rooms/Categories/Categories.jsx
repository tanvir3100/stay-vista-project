/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./CategoriesData";

const Categories = () => {
    const [params, SetParams] = useSearchParams();
    const category = params.get('category');
    console.log(category)
    return (
        <Container>
            <div className="flex justify-between items-center overflow-x-auto">
                {
                    categories.map(item =>
                        <CategoriesBox
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label}
                        />
                    )
                }
            </div>
        </Container>
    );
};

export default Categories;