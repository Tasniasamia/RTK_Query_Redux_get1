import { useGetPostQuery } from "../../Redux/Api";

const Card = () => {
    const { data } =useGetPostQuery();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Card;
