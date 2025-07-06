import { Button } from "./ui/button";

interface ICustomButtonProps{
    Varient?:string;
}

const CustomButton:React.FC<ICustomButtonProps> = (props) => {
    return (
        <div>
            <Button/>
        </div>
    )
}

export default CustomButton;