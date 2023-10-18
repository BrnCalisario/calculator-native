import { FlatList, Text, StyleSheet } from "react-native"
import { useHistoryContext } from "../../contexts/HistoryContext"

const styles = StyleSheet.create({
    text : {
        fontWeight: "bold",
        fontSize: "2rem",
        margin: "1rem"
    }
})

const ContaItem = (props) => {
    return (
        <>
            <Text style={styles.text}>{props.conta}</Text>
        </>
    )
}


const ContaHistory = (props) => {

    const { contas } = useHistoryContext()

    return (
        <FlatList data={contas} renderItem={({ item }) => <ContaItem conta={item} />} />
    )
}

export default ContaHistory