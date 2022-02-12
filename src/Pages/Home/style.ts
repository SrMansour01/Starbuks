import { StyleSheet } from "react-native";
import { Theme } from "../theme";

export const Style = StyleSheet.create({
    Cont:{
        flex: 1,
        backgroundColor: Theme.colors.white,
        alignItems: 'center'
    },
    header:{
        height: '15%',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '5%',
        marginTop: '5%',
        justifyContent: 'space-between',
        paddingRight: '10%'
    },
    txt:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    txt1:{
        fontSize: 25,
        marginLeft: '5%',
        fontWeight: 'bold'
    },
    user:{
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: Theme.colors.green,
        shadowColor: '#000',
        shadowOffset: {
            height: 10,
            width: 10,
        },
        shadowOpacity: 33.44,
        shadowRadius: 0.44,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1:{
        height: '25%',
        width: '90%',
        backgroundColor: Theme.colors.green1,
        marginTop: '5%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            height: 10,
            width: 10,
        },
        shadowOpacity: 33.44,
        shadowRadius: 0.44,
        elevation: 20,
        paddingLeft: '15%'
    },
    txt2:{
        color: Theme.colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    txtbtn:{
        fontSize: 18,
        color: Theme.colors.white,
    },
    btn:{
        borderColor: Theme.colors.white,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: '15%',
        height: '20%',
        width: '100%'
    },
    menu:{
        flexDirection: 'row',
        height: '20%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: '2%'
    },
    img:{
        height: 40,
        width: 40
    },
    btn1:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt3:{
        marginTop: '5%',
        fontSize: 15,

    },
    view2:{
        flex: 1,
        paddingHorizontal: '5%'
    },
    view3:{
        height: 200,
        width: 200,
        backgroundColor: Theme.colors.green,
        marginLeft: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt4:{
        color: 'black',
        fontSize: 20
    },
    img1:{
        height: 70,
        width: 70,
        marginBottom: '5%'
    },
    img3: {
        height: 150,
        width: 150,
        marginBottom: '15%',
        marginLeft: '15%'
    },
    img2:{
        height: 30,
        width: 30
    }
})