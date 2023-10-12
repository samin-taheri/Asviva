
export type Difficulaty = "easy" | "hard" | "normal";
export type SequenceType= "exercise" | "Strech" | "break";
import { ReactNode } from "react";
import { ViewStyle } from 'react-native';
import { ImageSourcePropType } from "react-native";

export interface Workout {
    slug: string,
    name: string,
    duration: number,
    difficulty: Difficulaty,
    sequence: Array<SequenceItem>,
}
export interface SequenceItem {
    slug: string,
    name: string,
    type: SequenceType,
    duration: number,
    reps?: number,
}
export interface CardProps {
    children: ReactNode;
    style?: ViewStyle;
  }
export interface LableProps {
    title: string;
}
export interface ChartProps {
    children?: ReactNode;
}
export interface GraphProps {
    children?: ReactNode;
    onPress?: () => void;
    title?: string;
    width: number;
    height: number;
    barPercentage: number;
    color?: string;
}
export interface TotalProps {
    onPress?: () => void;
}
export interface WeaklyGoalsProps {
    onPress?: () => void;
}
export interface StatsCardProps {
    title: string;
    value: string;
    style?: ViewStyle;
}
export interface CustomHeaderProps {
    title?: string;
    onBack?: () => void;
    navigation: any;
    onLogo: boolean;
}
export interface TopNavigationBarProps {
    option1Text: string;
    option2Text: string;
    selectedOption: 'option1' | 'option2';
    onOptionPress: (option: 'option1' | 'option2') => void;
}
export interface DeviceCardProps {
    title: string;
    cardColor: string;
    onPress: () => void;
    imageSource: ImageSourcePropType
}
export interface ProfileCardProps {
    title: string;
    iconName?: string;
    onPress: () => void;
    style?: ViewStyle;
    iconColor?: string;
    selectedOption?: string;
    selectedNumber?: number;
    selectedDate?: string; 
    selectedNickname?: string;
    imageSource: ImageSourcePropType
}
export interface WorkoutDetailsProps {
    title: string;
    onPress: () => void;
}
export interface BackGroundCardProps {
    title: string;
    backgroundImage: string; 
}
export interface BackgroundCardProps {
    title: string;
    backgroundImage: ImageSourcePropType;
    onPress:() => void;
}
export interface DetailsSectionProps {
    title: string;
    iconName?: string;
    onPress: () => void;
    style?: ViewStyle
    iconColor?: string;
    imageSource: ImageSourcePropType
}
export interface LoginProps {
    onLogin: (username: string, password: string) => void;
    onRegister: () => void;
    navigate: () => void;
    forgotPassword: () => void;
    signUp:() => void;
}
export interface SignUpProps {
    navigate: () => void;
    signUp:() => void;
    back: () => void;
}
export interface ForgotPasswordProps {
    onForgotPassword: () => void;
    back: () => void;
}
export interface ColoredCards2Props {
    title: string;
    description: string;
    cardColor?: string;
    imageSource: ImageSourcePropType;
    color: string;
}
export interface BrandCardProps {
    imageSource: ImageSourcePropType;
}
export interface LoadingProps {
    back: () => void;
}
export interface DataItem {
    id: string;
    title: string;
    backgroundImage: ImageSourcePropType
  }
export interface ChallengeComponentProps {
    imageSource: ImageSourcePropType; 
}
export interface TransparentCardProps {
    title: string;
    content: string;
}
export interface ProgressBarProps {
    progress: number;
}
export interface CouchingCourseComponentProps {
    onPress: (id: string) => void;
}
export interface MultiplayerComponentProps {
    onPress: (id: string) => void;
}
export interface SimpleCardProps {
    backgroundColor: string;
    title: string;
    kcal: string;
    id: string;
    onPress: (id: string) => void;
}
export interface NumberSelectorModalProps {
    isVisible: boolean;
    onToggle: () => void;
    onSelectNumber: (selectedNumber: number | null) => void;
}
export interface MyModalProps {
    isVisible: boolean;
    onClose: () => void;
}
export interface MyHeaderProps {
    showLogo?: boolean;
    showLogoWithoutBack?: boolean;
    onPress?: () => void;
    Title?: string;
    children?: React.ReactNode;
}
export interface ListItemProps {
    iconName: string;
    itemText: string;
    style?: any; 
}
export interface CochingCardProps {
    onPress: (id: string) => void;
}
export interface MultiplayerCardProps {
    imageSource: { uri: string };
    title: string;
    isLive: boolean;
    km: string;
    date: string;
    min: string;
    id: string;
    onPress: (id: string) => void;
}
export interface CochingCardProps {
    onPress: (id: string) => void;
}
export interface CochingCardProps {
    onPress: (id: string) => void;
}
export interface Card {
    id: number;
    title: string;
    description: string;
    image: string;
}
export interface HorizontalCardMapProps {
    cards: Card[];
}
export interface CustomTopTabBarProps {
    tabs: string[];
    activeTab: number;
    onTabPress: (index: number) => void;
}
export interface CouchingCourseComponentProps {
    onPress: (id: string) => void;
}
export interface CoouchingCardProps {
    imageSource: { uri: string };
    title: string;
    user: string;
    kcal: string;
    id: string;
    onPress: (id: string) => void;
}
export interface ColoredCardProps {
    icon: string;
    title: string;
    description: string;
    cardColor: string;
}
export interface CouchingCourseComponentProps {
    onPress: (id: string) => void;
}
export interface ChallengeCardProps {
    imageSource: { uri: string };
    title: string;
    user: string;
    loc: string;
    id: string;
    onPress: (id: string) => void;
}  
export interface MyModalProps {
    isVisible: boolean;
    onClose: () => void;
    title: string;
    selectedOption: string | null;
    onSelect: (option: string) => void;
}
export interface BrandCardProps {
    imageSource: ImageSourcePropType;
    style?: ViewStyle;
}