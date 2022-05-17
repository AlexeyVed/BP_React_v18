import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface INavigateButtonProps {
    to: string
    onClick?: (...args: any) => void
}

const NavigateButton: FC<INavigateButtonProps> = ({ to, onClick }) => {
    let navigate = useNavigate();

    const navigateTo = () => {
        if (onClick) onClick()
        navigate(to, { replace: true });
    }

    return <button onClick={navigateTo}>Navigate to: "{to}"</button>
}

export default NavigateButton