import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions} from 'react-native'
import {Icon} from 'react-native-elements'
import {colors, parameters } from '../global/styles';
import HomeHeader from '../components/HomeHeader';
import { filterData, restaurantsData } from '../global/data';
import FoodCard from '../components/FoodCard';


const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen() {

    const [delivery, setdelivery] = useState(true)
    const [indexCheck, setindexCheck] = useState("0")

    return (
        
        <View style={styles.container}>
            <HomeHeader/>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsHorizontalScrollIndicator={true}
            >
                <View>
                    <View style={{marginTop:10, flexDirection:'row', justifyContent:"space-evenly"}}>
                        <TouchableOpacity
                            onPress={()=>{
                                setdelivery(true)
                            }}  
                        >
                            <View style={{...styles.deliveryButton, backgroundColor:delivery?colors.buttons : colors.grey4}}>
                                <Text style={styles.deliveryText}>delivery</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                setdelivery(false)
                            }}  
                        >
                            <View style={{...styles.deliveryButton, backgroundColor:delivery?colors.grey4 : colors.buttons}}>
                                <Text style={styles.deliveryText}>pick up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.filterView}>
                    <View style={styles.addressView}>
                        <View style={{flexDirection:"row", alignItems:'center', paddingLeft:10}}>
                            <Icon
                                type='material-community'
                                name='map-marker'
                                color={colors.grey1}
                                size={25}
                            />
                            <Text style={{marginLeft:5}}>46 âu dương lân</Text>

                        </View>
                        <View style={styles.clockView}>
                            <Icon
                                type='material-community'
                                name='clock-time-four'
                                color={colors.grey1}
                                size={25}
                            />
                            <Text style={{marginLeft:5}}>Now</Text>

                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:'center', marginLeft:20}}>
                        <Icon
                            type='material-community'
                            name='tune'
                            color={colors.grey1}
                            size={25}
                        />
                    </View>
                </View>
                <View style={styles.ViewCategories}>
                    <Text style={styles.textCategories}>
                        Categories
                    </Text>
                </View>

                <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data = {filterData}
                        keyExtractor = {(item)=>item.id}
                        extraData = {indexCheck}
                        renderItem = {({item,index})=>(
                            <Pressable 
                                onPress={()=>{setindexCheck(item.id)}}
                            >
                                <View style={indexCheck === item.id ? {...styles.selectCategorie}:{...styles.listCategories}}>
                                    <Image
                                        style={{height:60, width:60, borderRadius:30}}
                                        source={item.image}
                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ?{...styles.listCategoriesSelectText}:{...styles.listCategoriesText}}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>

                        )}
                    />
                </View>

                <View style={styles.ViewCategories}>
                    <Text style={styles.textCategories}>
                        free delivery now
                    </Text>
                </View>

                <View>
                    <FlatList
                        style={{marginTop:10, marginBottom:10}}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor = {(item,index)=>index.toString()}
                        showsHorizontalScrollIndicator = {false}
                        renderItem = {({item})=>(
                            <View style={{marginRight:5}}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}
                                />
                            </View>

                        )}
                    />
                </View>

            </ScrollView>
            
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:10,
        paddingVertical:5
    },
    deliveryText:{
        marginLeft:5,
        fontSize:15
    },
    filterView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly', 
        marginHorizontal:10,
        marginVertical:10
    },
    clockView:{
        flexDirection:"row", 
        alignItems:'center', 
        marginLeft:20,
        backgroundColor:'white',
        borderRadius:10,
        paddingHorizontal:5,
        marginRight:20
    },
    addressView:{
        flexDirection:'row', 
        backgroundColor:colors.grey4, 
        borderRadius:10, 
        paddingVertical:5,
        justifyContent:'space-between'
    },
    textCategories:{
        color:colors.grey1,
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:10
    },
    ViewCategories:{
        backgroundColor:colors.grey5,
        paddingVertical:5
    },

    listCategories:{
        borderRadius:30,
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        height:100,
        margin:10
    },
    selectCategorie:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        height:100,
        margin:10
    },
    listCategoriesText:{
        fontWeight:'bold',
        color:colors.grey2,
    },
    listCategoriesSelectText:{
        fontWeight:'bold',
        color:'white',
    },


})

