import { Textarea } from "./ui/textarea";

interface ICustomTextAreaProps {
    placeholder?: string;
    error?: string;
}

const CustomTextArea: React.FC<ICustomTextAreaProps> = (props) => {
    return (
        <div>
            <Textarea name="name" id='name' placeholder={props.placeholder} />
            {
                props.error ? (
                    <p
                        className="text-destructive mt-2 text-xl"
                        role="alert"
                        aria-live="polite"
                    >
                        {props.error}
                    </p>
                ) : (
                    ""
                )}
        </div>
    )
}

export default CustomTextArea;