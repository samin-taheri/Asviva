
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
    onPress?: () => void;
}
export interface GraphProps {
    children?: ReactNode;
    onPress?: () => void;
    title?: string;
    width: number;
    height: number;
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
    selectedDate?: string; 
    imageSource: ImageSourcePropType
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
    style?: ViewStyle;
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