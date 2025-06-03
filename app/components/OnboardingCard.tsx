import { useRouter } from 'expo-router'; // Import useRouter
import React from 'react';
import { Dimensions, Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native'; // Import TouchableOpacity

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 1;
const CARD_HEIGHT = height * 0.1;

interface OnboardingCardProps {
    image: ImageSourcePropType;
}

const OnboardingCard: React.FC<OnboardingCardProps> = ({
    image,
}) => {
    const router = useRouter(); // Initialize the router

    const handleImagePress = () => {
        router.push('/sendMoney'); // Navigate to the sendMoney page
    };

    return (
        <View style={styles.card}>
            {/* Wrap each Image in a TouchableOpacity */}
            <TouchableOpacity onPress={handleImagePress}>
                <Image source={image} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleImagePress}>
                <Image source={image} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleImagePress}>
                <Image source={image} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleImagePress}>
                <Image source={image} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleImagePress}>
                <Image source={image} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        // Add these lines for the top border
        borderTopWidth: 1,
        borderTopColor: '#cccccc', // A common shade of gray
    },
    image: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    }
});

export default OnboardingCard;