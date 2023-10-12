// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { backgroundColor, cardBackground2, primaryColor, textColor } from '../global';
// import CustomHeader from '../components/CustomHeader';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';
// import ColoredCards2 from '../components/ColoredCards2';

// export default function ShowDeviceScreen({ navigation }: any) {
//   return (
//     <View style={styles.container}>
//       <CustomHeader
//         title="Device Screen"
//         onBack={() => navigation.goBack()}
//         navigation={navigation}
//         onLogo={false}
//       />
//       <View style={styles.contentContainer}>
//         <AnimatedCircularProgress
//           size={200}
//           width={15}
//           fill={80}
//           tintColor={primaryColor}
//           onAnimationComplete={() => console.log('onAnimationComplete')}
//           backgroundColor="#ccc"
//           style={{ alignItems: 'center', paddingTop: '15%' }}
//         >
//           {(fill) => (
//             <View style={styles.progressBarTextContainer}>
//               <Text style={styles.progressBarText}>9.4 km</Text>
//             </View>
//           )}
//         </AnimatedCircularProgress>
//         <View style={styles.container2}>
//             <ColoredCards2  
//             title="Total Duration"
//             color={primaryColor}
//             description="0 min"
//             cardColor={cardBackground2}
//             imageSource={require('../assets/times.png')}
//             />
//              <ColoredCards2  
//             title="Exercise Times"
//             color={primaryColor}
//             description="0"
//             cardColor={cardBackground2}
//             imageSource={require('../assets/bike.png')}
//             />
//              <ColoredCards2  
//             title="Total  Calories"
//             color={primaryColor}
//             description="0 kcal"
//             cardColor={cardBackground2}
//             imageSource={require('../assets/calories.png')}
//             />
//             </View>
//             <View style={styles.container2}>
//             <ColoredCards2
//             title="Distance"
//             color={primaryColor}
//             description="0 meter"
//             cardColor={cardBackground2}
//             imageSource={require('../assets/map.png')}
//             />
//              <ColoredCards2  
//             title="Energy"
//             color={primaryColor}
//             description="0 watt"
//             cardColor={cardBackground2}
//             imageSource={require('../assets/energy-4.png')}
//             />
//              <ColoredCards2  
//             title="Pulse"
//             color={primaryColor}
//             description="0 bpm"
//             cardColor={cardBackground2}
//             imageSource={require('../assets/pulse.png')}
//             />
//       </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: backgroundColor,
//   },
//   container2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 8,
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 8
//   },
//   progressBarTextContainer: {
//     position: 'absolute',
//     paddingTop: '100%',
//     paddingLeft: '50%',
//     transform: [{ translateX: -30 }, { translateY: -30 }],
//   },
//   progressBarText: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'black',
//     paddingTop: '50%'
//   },
// });


import { View, StyleSheet, Text } from "react-native";
import { backgroundColor, cardBackground, cardBackground2, primaryColor } from '../global';
import CustomHeader from "../components/CustomHeader";
import ColoredCards2 from "../components/ColoredCards2";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function ShowDeviceScreen({navigation}: any) {

    return(
        <View style={styles.container}>
        <CustomHeader title="Device Screen" onBack={() => navigation.goBack()} navigation={navigation}  onLogo={false}/>  
        <View style={styles.contentContainer}>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={80}
          tintColor={primaryColor}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#ccc"
          style={{ alignItems: 'center', paddingTop: '15%' }}
        >
          {(fill) => (
            <View style={styles.progressBarTextContainer}>
              <Text style={styles.progressBarText}>9.4 km</Text>
            </View>
          )}
        </AnimatedCircularProgress>      
        </View>  
        <View style={styles.contentContainer2}>
        <View style={styles.container2}>
            <ColoredCards2  
            title="Total Duration"
            color={primaryColor}
            description="0 min"
            cardColor={cardBackground2}
            imageSource={require('../assets/times.png')}
            />
             <ColoredCards2  
            title="Exercise Times"
            color={primaryColor}
            description="0"
            cardColor={cardBackground2}
            imageSource={require('../assets/bike.png')}
            />
             <ColoredCards2  
            title="Total  Calories"
            color={primaryColor}
            description="0 kcal"
            cardColor={cardBackground2}
            imageSource={require('../assets/calories.png')}
            />
            </View>
            <View style={styles.container2}>
            <ColoredCards2  
            title="Distance"
            color={primaryColor}
            description="0 meter"
            cardColor={cardBackground2}
            imageSource={require('../assets/map.png')}
            />
             <ColoredCards2  
            title="Energy"
            color={primaryColor}
            description="0 watt"
            cardColor={cardBackground2}
            imageSource={require('../assets/energy-4.png')}
            />
             <ColoredCards2  
            title="Pulse"
            color={primaryColor}
            description="0 bpm"
            cardColor={cardBackground2}
            imageSource={require('../assets/pulse.png')}
            />
      </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: '10%',
        color: primaryColor
      },
    icon2: {
        backgroundColor: cardBackground,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginLeft: 8,
      },
      contentContainer: {
            flex: 1,
            alignItems: 'center',
            padding: 8
          },
          contentContainer2: {
            padding: 8,
            flex: 1,
            marginTop: -100
          },
    progressBarTextContainer: {
            position: 'absolute',
            paddingTop: '100%',
            paddingLeft: '50%',
            transform: [{ translateX: -30 }, { translateY: -30 }],
          },
          progressBarText: {
            fontSize: 24,
            fontWeight: '600',
            color: 'black',
            paddingTop: '50%'
          },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'cover',
        borderRadius: 12,
      },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8
      },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black', 
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3,
        borderRadius: 12,
        margin: 8,
        backgroundColor: cardBackground2
      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 60,
        height: 60,
        borderRadius: 12,
        marginLeft: 10
      },
      title: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: 0,
        color: primaryColor
      },
});