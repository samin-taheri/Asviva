
export type Difficulaty = "easy" | "hard" | "normal";
export type SequenceType= "exercise" | "Strech" | "break";
import { ReactNode } from "react";
import { ViewStyle } from 'react-native';

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
    title: string;
    onBack?: () => void;
}
export interface TopNavigationBarProps {
    option1Text: string;
    option2Text: string;
    selectedOption: 'option1' | 'option2';
    onOptionPress: (option: 'option1' | 'option2') => void;
  }
  