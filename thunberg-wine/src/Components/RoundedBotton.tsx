

export interface RoundedButtonProps {
    icon?: string;
    label: string;
    onclick: () => void;
}

export default function RoundedButton(
    {icon,  label, onclick }: RoundedButtonProps = {icon: "", label: "", onclick: () => {} }
    
) {
    return(
        <button
            style={{ borderRadius: "10px" }}
            onClick={(e) => {
                e.preventDefault();
                onclick();
            }}
        >
        {icon && <img src={icon} alt="icon"/>}    
        {label && <p>{label}</p>}    
        </button>
    );
}