import { TouchableOpacity, View, Text } from "react-native"
import MyButton from "../../components/MyButton"
import { styles } from "./style"
import { useState } from "react"

const Calculator = (props) => {
    
    const [ conta, setConta ] = useState("")

    const increment = (value) => {
        setConta(conta + value)
    }

    const calculate = () => {
        let result = eval(conta)
        setConta(result)
    }

    const clear = () => {
        setConta('')
    }

    return (
        <View>
            <Text style={styles.calculatorLabel}>{ conta }</Text>

            <View style={styles.buttonGroup}>
                <MyButton text="+" onPress={() => { increment("+") }}/>
                <MyButton text="-" onPress={() => { increment("-") }}/>
                <MyButton text="/" onPress={() => { increment("/") }}/>
                <MyButton text="*" onPress={() => { increment("*") }}/>
                <MyButton text="=" onPress={() => { calculate() }}/>
            </View>

            <View>
                <View style={styles.buttonGroup}>
                    <MyButton text="1" onPress={() => { increment("1") }}/>
                    <MyButton text="2" onPress={() => { increment("2") }}/>
                    <MyButton text="3" onPress={() => { increment("3") }}/>
                </View>
                <View style={styles.buttonGroup}>
                    <MyButton text="4" onPress={() => { increment("4") }}/>
                    <MyButton text="5" onPress={() => { increment("5") }}/>
                    <MyButton text="6" onPress={() => { increment("6") }}/>

                </View>
                <View style={styles.buttonGroup}>
                    <MyButton text="7" onPress={() => { increment("7") }}/>
                    <MyButton text="8" onPress={() => { increment("8") }}/>
                    <MyButton text="9" onPress={() => { increment("9") }}/>
                </View>
                <View style={styles.buttonGroup}>
                    <MyButton text="0" onPress={() => { increment("0") }}/>
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <MyButton text="Limpar" onPress={() => {clear()}}/>
                <MyButton text="Histórico" />
            </View>
        </View>
    )
}


export default Calculator