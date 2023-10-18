import { TouchableOpacity, Text } from "react-native"
import { styles } from "./style"

export default function MyButton(props) {
    return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{ props.text }</Text>
    </TouchableOpacity>)
}