import { Stack } from "expo-router";
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import OnboardingCard from "./components/OnboardingCard"; // Assuming OnboardingCard.tsx is in a 'components' folder

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth - 40; // Adjusted width to show 10px of adjacent cards

const onboardingCards = [
  {
    id: '1',
    title: '50% OFF',
    subtitle: 'Summer special deal',
    description: 'Get discount for every transaction',
    image: require('../assets/images/girl.png'),
  },
  {
    id: '2',
    title: 'Earn Rewards',
    subtitle: 'Invite friends',
    description: 'Get ₹100 cashback per referral',
    image: require('../assets/images/girl.png'),
  },
  {
    id: '3',
    title: 'Secure Wallet',
    subtitle: 'Top-notch security',
    description: 'Your money is always safe with us',
    image: require('../assets/images/girl.png'),
  },
];


export default function MainPage() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="cover"
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.userData}>
        <View>
          <Text style={styles.userName}>Hi, Samantha</Text>
          <Text style={styles.availableBalance}>Your available balance</Text>
        </View>
        <View>
          <Text style={styles.userBalance}>₹4,590.00</Text>
        </View>
      </View>
      <View style={styles.actionsWrapper}>
        <View style={styles.action}>
          <Image
            source={require("../assets/images/plus.png")}
            style={styles.actionImage}
            resizeMode="contain"
          />
          <Text style={styles.actionText}>Top Up</Text>
        </View>
        <View style={styles.action}>
          <Image
            source={require("../assets/images/send.png")}
            style={styles.actionImage}
            resizeMode="contain"
          />
          <Text style={styles.actionText}>Send</Text>
        </View>
        <View style={styles.action}>
          <Image
            source={require("../assets/images/withdraw.png")}
            style={styles.actionImage}
            resizeMode="contain"
          />
          <Text style={styles.actionText}>Withdraw</Text>
        </View>
      </View>
      <View style={styles.categoriesWrapper}>
        <View style={styles.firstLine}>
          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>
        </View>
        <View style={styles.secondLine}>
          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require("../assets/images/internet.png")}
              style={styles.actionImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>internet</Text>
          </View>
        </View>
      </View>
      <View style={styles.saleWrapper}>
        <FlatList
          data={onboardingCards}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardWidth}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: 10, // For showing 10px of adjacent cards
          }}
          renderItem={({ item }) => (
            <View style={[styles.carouselCard, { width: cardWidth }]}>
              <View style={styles.textWrapper}>
                <Text style={styles.off}>{item.title}</Text>
                <Text style={styles.special}>{item.subtitle}</Text>
                <Text style={styles.discount}>{item.description}</Text>
              </View>
              <Image
                source={item.image}
                style={styles.saleImage}
                resizeMode="contain"
              />
            </View>
          )}
        />
      </View>
      <View style={styles.transactionWrapper}>
        <Text style={styles.transaction}>Recent Transaction</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={styles.cardWrapper}>
        <View style={styles.cardLeftWrapper}>
          <Image
            source={require("../assets/images/hat.png")}
            style={styles.cardImage}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.categoryText}>Raj K</Text>
            <Text style={styles.categoryText}>February 24,2022</Text>
          </View>
        </View>
        <View style={styles.cardRightWrapper}>
          <Text style={styles.categoryText}>₹240.00</Text>
        </View>
      </View>

      {/* OnboardingCard positioned at the bottom */}
      <View style={styles.onboardingCardContainer}>
        <OnboardingCard
          image={require('../assets/images/home.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1, // Make the container fill the screen
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageWrapper: {
    paddingHorizontal: 16,
    marginTop: 47,
  },
  backgroundImage: {
    width: 103,
    height: 23,
    paddingHorizontal: 16
  },
  userData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingTop: 19
  },
  userName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 15,
    color: "#1C1C1C"
  },
  userBalance: {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: 19,
    color: "#1C1C1C"
  },
  availableBalance: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 13,
    color: "#595F67"
  },
  actionsWrapper: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 19,
    marginHorizontal: 16,
    borderRadius: 3,
    paddingTop: 13,
    paddingBottom: 13,
  },
  action: {
    marginHorizontal: 34,
    alignItems: "center",

  },
  actionText: {
    color: "#ffff"
  },
  actionImage: {
    width: 19,
    height: 19
  },
  categoriesWrapper: {
    backgroundColor: "#FAFAFA",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 19,
    marginHorizontal: 16,
    borderRadius: 3,
    gap: 19,
    padding: 13
  },
  firstLine: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  secondLine: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryText: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 14,
    color: "#595F67"
  },
  category: {
    alignItems: "center"
  },
  saleWrapper: {
    backgroundColor: "#FCB3C5",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13,
    marginTop: 20,
    marginHorizontal: 12,
    maxHeight: 100
  },
  textWrapper: {
    gap: 7
  },
  saleImageWrapper: {

  },
  saleImage: {
    width: 190,
    height: 120,
    position: "relative",
    top: -25,
    left: 15,
  },
  off: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 16,
    color: "#000000",
    lineHeight: 16
  },
  special: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 13,
    color: "#000000",
    lineHeight: 16
  },
  discount: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 10,
    color: "#0B0A0A",
    maxWidth: 110,
    lineHeight: 16
  },
  carouselCard: {
    backgroundColor: "#FCB3C5",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 13,
    marginHorizontal: 5,
    height: 100,
  },
  transactionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 19
  },
  transaction: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 600,
    fontSize: 19,
    color: "#000000",
    lineHeight: 16
  },
  seeAll: {
    fontFamily: "IBM Plex Sans",
    fontWeight: 600,
    fontSize: 13,
    color: "#000000",
    lineHeight: 24
  },
  cardWrapper: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 13,
    paddingRight: 13,
    marginHorizontal: 16,
    marginTop: 13
  },
  cardImage: {
    width: 25,
    height: 25
  },
  cardLeftWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13
  },
  cardRightWrapper: {

  },
  onboardingCardContainer: {
    position: 'absolute', // Position the card absolutely
    bottom: 0,           // Align it to the bottom of the parent
    left: 0,             // Align it to the left
    right: 0,            // Align it to the right
    alignItems: 'center', // Center the card horizontally
  },
});