import { Pressable, Text, StyleSheet, Image, View } from "react-native"
import { Product } from "../types/product"
import { Link } from "expo-router"

type Props = {
    data: Product
}

export default function ProductItem({data}: Props) {
    return (
        <Link href={`/product/${data.id}`}>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>R$ - {data.price}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 20,
        backgroundColor: '#CCCCCC'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    info: {
        flex: 1
    },
    description: {
        fontSize: 13,
        color: '#555555' ,
        marginBottom: 10
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
    }
})