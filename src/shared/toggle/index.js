import { ToggleButton } from "./styles"

export const Toggle = ({value, onClick}) => {
    return <ToggleButton isEnabled={value} onClick={onClick}/>
}