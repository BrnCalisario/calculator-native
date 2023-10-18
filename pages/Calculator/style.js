import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    calculatorLabel: {
        paddingVertical: "1rem",
        border: "1px solid #777",
        width: "18rem",
        alignSelf :"center",
        backgroundColor: "white"
    },
    buttonGroup: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"flex-start",
        gap: "1rem",
        alignSelf:"center",
        marginVertical: "1rem"
    }

})