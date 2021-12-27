import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TextInput } from 'react-native-gesture-handler';

const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");

export default class RideRentScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            domState: "normal",
            hasCameraPermissions: null,
            scanned: false,
            bicycleId: "",
            userId: ""
        }
    }

    getCameraPermissions = async (domState) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            domState: domState,
            hasCameraPermissions: status === "granted",
            scanned: false
        });
    }

    handleBarCodeScanned = async ({ type, data }) => {
        this.setState({
            bicycleId: data,
            domState: "normal",
            scanned: true
        })
    }

    render() {
        const { domState, hasCameraPermissions, bicycleId, userId, scanned } = this.state;
        if (domState === "scanner") {
            return (
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject} />
            )
        }
        return (
            <View style={styles.container}>
                <ImageBackground source={bgImage} style={styles.bgImage}>
                    <View style={styles.upperContainer}>
                        <Image source={appIcon} style={styles.appIcon} />
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="User Id"
                                placeholderTextColor="#FFFFFFCC"
                                value={userId}
                            />
                        </View>

                        <View style={[styles.textInputContainer, { marginTop: 25 }]}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Bicycle Id"
                                placeholderTextColor="#FFFFFFCC"
                                value={bicycleId}
                            />
                            <TouchableOpacity style={styles.scanButton} onPress={() => {
                                this.getCameraPermissions("scanner");
                            }}>
                                <Text style={styles.scanButtonText}>Scan</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    appIcon: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginTop: 80
    },
    appName: {
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    lowerContainer: {
        flex: 0.5,
        alignItems: "center"
    },
    textInputContainer: {
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "#9DFD24",
        borderColor: "#FFFFFF"
    },
    textInput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#5653D4",
        fontFamily: "Rajdhani_600SemiBold",
        color: "#FFFFFF"
    },
    scanButton: {
        width: 100,
        height: 50,
        backgroundColor: "#9DFD24",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    scanButtonText: {
        fontSize: 24,
        color: "#0A0101",
        fontFamily: "Rajdhani_600SemiBold"
    },
    button: {
        width: '43%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F48D20',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: "Rajdhani_600SemiBold",
    }
});