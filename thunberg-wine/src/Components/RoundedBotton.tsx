

export interface RoundedButtonProps {
    icon?: string;
    label?: string;
    label2?: string;
    onclick: () => void;
}

export default function RoundedButton(
    {icon,  label, label2, onclick }: RoundedButtonProps = {icon: "", label: "", onclick: () => {} }
    
) {
    return(
        <button
            style={{ borderRadius: "10px" }}
            onClick={(e) => {
                e.preventDefault();
                onclick();
            }}
        >
        {label2 && <p>{label2}</p>}
        {icon && <img src={icon} alt="icon"/>}    
        {label && <p>{label}</p>}    
        </button>
    );
}