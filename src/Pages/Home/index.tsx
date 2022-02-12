import React, {useState} from "react";
import { 
    View, 
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    Modal
} from "react-native";
import { Style } from "./style";

const data = [
    {
        id: '01',
        titulo: 'cafe',
        img: require('../../assets/clip1.png'),
    },
    {
        id: '02',
        titulo: 'cafe',
        img: require('../../assets/clip2.png'),
    },
    {
        id: '03',
        titulo: 'cafe',
        img: require('../../assets/clip1.png'),
    },
    {
        id: '04',
        titulo: 'cafe',
        img: require('../../assets/clip2.png'),
    },
    {
        id: '05',
        titulo: 'cafe',
        img: require('../../assets/clip1.png'),
    },
]

const Item = ({titulo, img}) => (
    <TouchableOpacity style={Style.view3} activeOpacity={0.7} >
        <Image source={img} style={Style.img1} />
        <Text style={Style.txt4}>{titulo}</Text>
    </TouchableOpacity>
)

export default function Home(){

    const renderItem = ({item}) => (
        <Item titulo={item.titulo} img={item.img}/>
    )

    return(
        <SafeAreaView style={Style.Cont}>
            <View style={Style.header}>
                <View style={Style.view}>
                    <Text style={Style.txt}>Good</Text>
                    <Text style={Style.txt1}>Morning!</Text>
                </View>
                <View style={Style.user}>
                    <Image source={require('../../assets/clip4.png')} style={Style.img2}/>
                </View>
            </View>
            <View style={Style.view1}>
                <View style={Style.view}>
                    <Text style={Style.txt2}>STARBUKS</Text>
                    <Text style={Style.txt2}>FOR LIFE</Text>
                    <TouchableOpacity style={Style.btn}activeOpacity={0.5}>
                        <Text style={Style.txtbtn}>shop now</Text>
                    </TouchableOpacity>
                </View>
                    <Image source={require('../../assets/clip3.png')} style={Style.img3}/>
            </View>
            <View style={Style.menu}>
                <TouchableOpacity style={Style.btn1}activeOpacity={0.4}>
                    <Image source={require('../../assets/cof.png')} style={Style.img}/>
                    <Text style={Style.txt3}>DRINKS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.btn1}activeOpacity={0.4}>
                    <Image source={require('../../assets/bol.png')} style={Style.img}/>
                    <Text style={Style.txt3}>DRINKS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.btn1}activeOpacity={0.4}>
                    <Image source={require('../../assets/drink.png')} style={Style.img}/>
                    <Text style={Style.txt3}>DRINKS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.btn1}activeOpacity={0.4}>
                    <Image source={require('../../assets/loja.png')} style={Style.img}/>
                    <Text style={Style.txt3}>DRINKS</Text>
                </TouchableOpacity>
            </View>
            <View style={Style.view2}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}