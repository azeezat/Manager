//Import Libraries for making a component
import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'

    }
}

export {CardSection}